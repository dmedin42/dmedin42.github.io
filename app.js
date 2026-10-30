// Express app: routes, view engine, and static files.
// server.js starts it; scripts/build-static.js renders it to plain HTML.
const path = require("path");
const express = require("express");
const site = require("./data/site");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Values every view can use: site content and the current year.
app.locals.site = site;
app.locals.year = new Date().getFullYear();

app.use(express.static(path.join(__dirname, "public")));

// One entry per page. `key` marks the active nav link.
const pages = [
  { path: "/", key: "home", view: "pages/home", title: "David Medina | Information Systems, BYU", description: site.description },
  { path: "/about", key: "about", view: "pages/about", title: "About Me | David Medina", description: "About David Medina: background, skills, education, and work experience." },
  { path: "/projects", key: "projects", view: "pages/projects", title: "Projects | David Medina", description: "Projects by David Medina, including LexiTrack, an AI reading assessment platform." },
];

for (const page of pages) {
  // Accept both /about and /about/ so links work the same here and on GitHub Pages.
  const routes = page.path === "/" ? ["/"] : [page.path, page.path + "/"];
  app.get(routes, (req, res) => res.render(page.view, { page }));
}

const notFound = { key: null, view: "pages/404", title: "Page not found | David Medina", description: site.description };
app.use((req, res) => res.status(404).render(notFound.view, { page: notFound }));

module.exports = { app, pages, notFound };
