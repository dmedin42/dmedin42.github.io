# david-medina.me

David Medina's portfolio, built with Node.js, Express, and EJS.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000, restarts when you save a file
```

## Where things live

| What | Where |
| --- | --- |
| All the text (bio, jobs, skills, projects) | `data/site.js` |
| Page layouts | `views/pages/*.ejs` |
| Shared header, footer, cards | `views/partials/*.ejs` |
| Colors and styles | `public/assets/styles.css` |
| Photos and resume | `public/images/`, `public/resume.pdf` |
| Routes | `app.js` |

To add a project, add an entry to `projects` in `data/site.js`. It shows up on the Projects page automatically. Give it `demo` and/or `code` URLs to show links.

## Publishing

GitHub Pages can't run a Node server, so `npm run build` renders every page to plain HTML in `dist/`. The workflow in `.github/workflows/deploy.yml` does this automatically on every push to `main` and publishes `dist/` to david-medina.me.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

To run it as a live Node server instead (Render, Railway, Vercel, etc.), use `npm start`. It listens on `PORT` or 3000.
