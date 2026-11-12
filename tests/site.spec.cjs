const { test, expect } = require('@playwright/test')
const { readdirSync } = require('node:fs')
const { join, relative, sep } = require('node:path')

// Discover built pages so a newly added page is checked automatically.
function builtPages(directory = 'public') {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return builtPages(path)
    if (entry.name !== 'index.html') return []
    const route = '/' + relative('public', directory).split(sep).filter(Boolean).join('/')
    return route === '/404' ? [] : [route === '/' ? '/' : route + '/']
  })
}

const pages = builtPages()
const sitePath = route => `${process.env.SITE_PATH_PREFIX || ''}${route}`
const headings = { '/': 'Hi, I’m Michael Cao.', '/projects/': 'Projects', '/work/': 'Work', '/me/': 'About', '/resume/': 'Resume' }

for (const [route, heading] of Object.entries(headings)) {
  test(`${route} loads with its content and fits the viewport`, async ({ page }) => {
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    const response = await page.goto(sitePath(route))
    expect(response.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1, name: heading, exact: true })).toBeVisible()
    // Wait for hydration rather than testing only Gatsby's static HTML.
    await expect(page.getByRole('button', { name: 'Switch to light theme' }).filter({ visible: true })).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    expect(errors).toEqual([])
  })
}

test('navigation reaches Projects, Work, About, and Resume', async ({ page }, testInfo) => {
  await page.goto(sitePath('/'))
  for (const [label, route] of [['Projects', '/projects/'], ['Work', '/work/'], ['About', '/me/']]) {
    if (testInfo.project.name === 'mobile') await page.getByRole('button', { name: 'Open navigation' }).click()
    const navigation = page.locator(testInfo.project.name === 'mobile' ? '.navbar .nav-items' : '.sidebar-nav-links')
    await navigation.getByRole('link', { name: label, exact: true }).click()
    await expect(page).toHaveURL(new RegExp(route + '$'))
    await expect(page.getByRole('heading', { level: 1, name: headings[route], exact: true })).toBeVisible()
  }
  // The Resume link is exposed in the homepage content at every screen size.
  await page.goto(sitePath('/'))
  await page.locator('main').getByRole('link', { name: 'resume', exact: true }).click()
  await expect(page).toHaveURL(/\/resume\/$/)
})

test('theme and accent persist, and the portrait follows the accent', async ({ page }) => {
  await page.goto(sitePath('/'))
  const visibleButton = name => page.getByRole('button', { name, exact: true }).filter({ visible: true })
  await visibleButton('Switch to light theme').click()
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light')
  await visibleButton('Choose accent color').click()
  await visibleButton('Blue accent').click()
  const portrait = page.locator('.profile-portrait')
  await expect(portrait).toHaveCSS('border-top-width', '5px')
  const border = await portrait.evaluate(el => getComputedStyle(el).borderTopColor)
  expect(border).toBe(await visibleButton('Choose accent color').locator('.circle').evaluate(el => getComputedStyle(el).backgroundColor))
  await page.reload()
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light')
  await expect(portrait).toHaveCSS('border-top-color', border)
  await visibleButton('Switch to dark theme').click()
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark')
})

for (const route of ['/', '/me/']) {
  test(`${route} portrait loads and has the intended responsive placement`, async ({ page }, testInfo) => {
    await page.goto(sitePath(route))
    const portrait = page.getByRole('img', { name: 'Michael Cao smiling in front of a mountain glacier' })
    await expect(portrait).toBeVisible()
    await expect.poll(() => portrait.evaluate(el => el.complete && el.naturalWidth > 0)).toBe(true)
    await expect(portrait).toHaveCSS('border-radius', '50%')
    const image = await portrait.boundingBox()
    expect(Math.abs(image.width - image.height)).toBeLessThan(1)
    if (testInfo.project.name === 'mobile') {
      const main = await page.locator('main').boundingBox()
      expect(Math.abs(image.x + image.width / 2 - main.x - main.width / 2)).toBeLessThan(2)
    } else {
      const text = route === '/'
        ? await page.locator('.hero-wrapper > div').boundingBox()
        : await page.locator('.about-article p').first().evaluate(el => {
          const range = document.createRange()
          range.selectNodeContents(el)
          return range.getBoundingClientRect().toJSON()
        })
      expect(image.x).toBeGreaterThanOrEqual(text.x + text.width)
    }
  })
}

test('built pages have working internal links, fragments, and assets', async ({ page, request, baseURL }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'The same link inventory applies to both viewports.')
  const targets = new Map()
  const ids = new Map()
  for (const route of pages) {
    await page.goto(sitePath(route))
    ids.set(new URL(sitePath(route), baseURL).pathname, await page.locator('[id]').evaluateAll(els => els.map(el => el.id)))
    const references = await page.locator('a[href], img[src], script[src], link[rel="stylesheet"][href]').evaluateAll(els =>
      els.map(el => ({ value: el.getAttribute('href') || el.getAttribute('src'), tag: el.tagName })))
    for (const { value } of references) {
      const url = new URL(value, new URL(sitePath(route), baseURL))
      if (!['http:', 'https:'].includes(url.protocol)) continue
      if (['cmkhoa.me', 'www.cmkhoa.me'].includes(url.hostname)) url.host = new URL(baseURL).host, url.protocol = 'http:'
      if (url.origin !== baseURL) continue
      if (!targets.has(url.href)) targets.set(url.href, route)
    }
  }
  const checked = new Set()
  for (const [target, source] of targets) {
    const url = new URL(target)
    const hash = decodeURIComponent(url.hash.slice(1))
    url.hash = ''
    if (!checked.has(url.href)) {
      const response = await request.get(url.href)
      expect(response.ok(), `${source} → ${target}: HTTP ${response.status()}`).toBe(true)
      await response.dispose()
      checked.add(url.href)
    }
    if (hash) expect(ids.get(url.pathname), `${source} → ${target}: missing fragment`).toContain(hash)
  }
  expect(checked.size).toBeGreaterThan(0)
})

test('optional external link audit', async ({ page, request, baseURL }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop' || !process.env.CHECK_EXTERNAL_LINKS, 'Run npm run test:external to check third-party links.')
  test.setTimeout(180000)
  const targets = new Set()
  for (const route of pages) {
    await page.goto(sitePath(route))
    for (const href of await page.locator('a[href]').evaluateAll(els => els.map(el => el.href))) {
      const url = new URL(href)
      if (['http:', 'https:'].includes(url.protocol) && url.origin !== baseURL && !['cmkhoa.me', 'www.cmkhoa.me'].includes(url.hostname)) {
        url.hash = ''
        targets.add(url.href)
      }
    }
  }
  for (const url of targets) {
    const response = await request.get(url, { timeout: 15000 })
    if ([401, 403, 429].includes(response.status())) {
      testInfo.annotations.push({ type: 'warning', description: `${url}: HTTP ${response.status()} blocks automated verification` })
    } else {
      expect.soft(response.ok(), `${url}: HTTP ${response.status()}`).toBe(true)
    }
    await response.dispose()
  }
})
