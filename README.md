# Portfolio

A single-page developer portfolio built with React, TypeScript, and Vite.

**Live:** <https://your-username.github.io/ai-se_project_portfolio/>

## Features

- **Navbar** with anchor links that scroll to each section, and a
  collapsible menu on small screens.
- **About** section with your name, title, and a short intro blurb.
- **Skills** grouped by category (languages, frontend, backend, tools).
- **Projects** grid with a card per project: name, description,
  screenshot, and links to the GitHub repo and the live deployment.
- **Contact** section with email, GitHub, and LinkedIn links.

All content lives in [src/data/](src/data/) — edit those files to
replace the example profile, skills, and projects with your own. No
component code needs to change faor content updates.

## Tech stack

- React
- TypeScript
- Vite
- ESLint

## Getting started

Prerequisites: Node.js 20+

1. Clone the repository.
2. `cd` into it.
3. Run `npm install`.
4. Run `npm run dev` to start the local dev server.

## Customizing

| To change...                      | Edit...                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------ |
| Name, title, blurb, contact links | [src/data/profile.ts](src/data/profile.ts)                                                 |
| Skills                            | [src/data/skills.ts](src/data/skills.ts)                                                   |
| Projects                          | [src/data/projects.ts](src/data/projects.ts)                                               |
| Project screenshots               | [src/assets/projects/](src/assets/projects/) (placeholder SVGs — swap in real screenshots) |
| Colors, fonts, spacing            | CSS custom properties in [src/index.css](src/index.css)                                    |

## Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the dev server                               |
| `npm run build`   | Type-check and build for production                |
| `npm run preview` | Preview the production build locally               |
| `npm run lint`    | Run ESLint                                         |
| `npm run deploy`  | Build and publish `dist/` to the `gh-pages` branch |

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In [vite.config.ts](vite.config.ts), set `base` to match your repo
   name: `/your-repo-name/`.
3. Run `npm run deploy`. This builds the app and publishes `dist/` to
   a `gh-pages` branch via the [gh-pages](https://www.npmjs.com/package/gh-pages)
   package.
4. In the repo's GitHub Pages settings, set the source to the
   `gh-pages` branch.
