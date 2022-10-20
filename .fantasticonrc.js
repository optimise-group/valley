"use strict";

const codepoints = require("./dist/valkyrie.json");

module.exports = {
  inputDir: "./icons",
  outputDir: "./dist",
  fontTypes: ["woff", "woff2"],
  assetTypes: ["css", "scss", "html", "json"],
  fontsUrl: "./fonts",
  name: "Valkyrie",
  prefix: "vi",
  selector: ".vi",
  codepoints,
  descent: 26,
  templates: {
    html: "./templates/html.hbs",
    css: "./templates/css.hbs",
    scss: "./templates/css.hbs",
  },
  pathOptions: {
    eot: "./dist/fonts/Valkyrie.eot",
    ttf: "./dist/fonts/Valkyrie.ttf",
    woff: "./dist/fonts/Valkyrie.woff",
    woff2: "./dist/fonts/Valkyrie.woff2",
    css: "./dist/Valkyrie.css",
    scss: "./dist/Valkyrie.scss",
    html: "./docs/index.html",
    json: "./dist/valkyrie.json",
  },
};
