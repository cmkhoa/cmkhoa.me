# cmkhoa.me

Personal website for `cmkhoa.me`, built with Gatsby. GitHub Actions checks and deploys
the site to GitHub Pages; the existing Vercel deployment remains available
during the domain transition.

## Run locally

```sh
npm ci
npm run develop
```

Build the production site with:

```sh
npm run build
```

## Content and setup

- Site writing is checked into [`content/`](content/); there is no submodule.
- Edit site metadata and social profiles in `src/utils/config.js`.
- Update project cards in `src/data/projectsList.js` and experience in `src/data/experienceList.js`.
- Replace the visual files in `src/assets/` and `static/logo.png` in place;
  their paths are already wired into the navigation and manifest.

This project includes the upstream [MIT License](LICENSE). It began as a
separate copy of the Gatsby implementation from
[taniarascia.com](https://github.com/taniarascia/taniarascia.com); all
personal content and branding must remain cmkhoa's own.

## Quality checks

GitHub Actions builds the production site and runs Chromium checks on pull
requests and pushes to `main`. The checks cover every generated page's internal
links, fragments, and referenced assets, plus desktop/mobile navigation, viewport
overflow, portrait loading and placement, and persisted theme/accent settings.
Failures include a downloadable HTML report, screenshots, and browser traces.

Run the same checks locally:

```sh
npm ci
npx playwright install chromium
npm run build
npm test
```

Tests start and stop a local production server on port 9000. They require a
fresh production build; they do not run against the live website.

Third-party links are excluded from the required checks because those services
can block automated requests or have temporary outages. Run
`npm run test:external` after building, or select **Run workflow → external_links**
in GitHub Actions for an optional external audit. HTTP 401, 403, and 429 responses
are recorded as warnings rather than claiming the link is verified.

GitHub Pages deploys only after the quality job passes on `main`. Pull requests
run quality checks without a Pages deployment. The existing Vercel integration
continues to deploy independently during migration.

## GitHub Pages and custom domain

Pages uses the GitHub Actions publishing source. Its deployment job reads the
configured Pages base path, so it supports both the initial
`https://cmkhoa.github.io/cmkhoa.me/` address and the custom domain without
hardcoding a repository subpath. The portrait uses Gatsby's path-prefix helper.
Canonical links remain on `https://cmkhoa.me`.

To move the domain after verifying Pages:

1. Set `cmkhoa.me` in **Settings → Pages → Custom domain**.
2. Run **Portfolio quality and Pages** on `main` to rebuild for the domain root.
3. Change the apex A records to GitHub Pages: `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Remove conflicting
   Vercel A/AAAA records, and set the `www` CNAME to `cmkhoa.github.io`.
4. Wait for GitHub's DNS and certificate checks, then enable **Enforce HTTPS**.

Do not remove unrelated MX/TXT records. Keep Vercel available until the new
domain serves correctly. No DNS changes are made by this workflow.

For review before merging, require the `Build and browser checks` status on
`main` in branch protection. The workflow itself does not prohibit direct pushes.
