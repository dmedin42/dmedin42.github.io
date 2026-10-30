// Renders every page of the Express app to plain HTML in dist/,
// so the site can be hosted on GitHub Pages (which can't run Node).
//
//   npm run build   ->  dist/index.html, dist/about/index.html, dist/projects/index.html, dist/404.html
const fs = require("fs");
const path = require("path");
const { app, pages, notFound } = require("../app");

const root = path.join(__dirname, "..");
const out = path.join(root, "dist");

function render(view, locals) {
  return new Promise((resolve, reject) => {
    app.render(view, locals, (err, html) => (err ? reject(err) : resolve(html)));
  });
}

async function write(file, html) {
  const full = path.join(out, file);
  await fs.promises.mkdir(path.dirname(full), { recursive: true });
  await fs.promises.writeFile(full, html);
  console.log("  " + file);
}

(async () => {
  await fs.promises.rm(out, { recursive: true, force: true });
  await fs.promises.cp(path.join(root, "public"), out, { recursive: true });
  if (fs.existsSync(path.join(root, "resume.pdf"))) {
    await fs.promises.copyFile(path.join(root, "resume.pdf"), path.join(out, "resume.pdf"));
  }

  for (const page of pages) {
    const file = page.path === "/" ? "index.html" : path.join(page.path.slice(1), "index.html");
    await write(file, await render(page.view, { page }));
  }
  await write("404.html", await render(notFound.view, { page: notFound }));

  // Keep the custom domain and stop GitHub Pages from running Jekyll on the output.
  await write("CNAME", "david-medina.me\n");
  await write(".nojekyll", "");

  console.log("Built static site in dist/");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
