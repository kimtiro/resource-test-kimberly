import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const template = await readFile(resolve(root, "src/html/index.template.html"), "utf8");

const partials = {
  hero: "header.html",
  intro: "intro.html",
  collections: "collections.html",
  media: "media.html",
  contact: "contact.html",
  gallery: "gallery.html",
  footer: "footer.html"
};

let html = template;

for (const [key, filename] of Object.entries(partials)) {
  const partial = await readFile(resolve(root, "src/html/partials", filename), "utf8");
  html = html.replace(`<!-- @include ${key} -->`, partial.trim());
}

await writeFile(resolve(root, "index.html"), `${html.trim()}\n`);
