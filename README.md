# cmkhoa.me

Personal website for `cmkhoa.me`, built with Gatsby and deployed through
Vercel.

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
