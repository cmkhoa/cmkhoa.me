const config = {
  siteTitle: 'cmkhoa',
  siteAuthor: 'Michael Cao',
  siteUrl: 'https://cmkhoa.me',
  pathPrefix: process.env.GATSBY_PATH_PREFIX || '',
  siteLogo: '/logo.png',
  description: 'Michael Cao — UIC Computer Science student building backend systems, AI infrastructure, and tools in Go, Rust, and Python.',
  profiles: ['https://github.com/cmkhoa', 'https://linkedin.com/in/cmkhoa'],
}

export default config

// Keep canonical links on the custom domain while previewing on a Pages subpath.
export const sitePageUrl = (pathname) => {
  const path = config.pathPrefix && pathname.startsWith(`${config.pathPrefix}/`)
    ? pathname.slice(config.pathPrefix.length)
    : pathname
  return `${config.siteUrl}${path}`
}
