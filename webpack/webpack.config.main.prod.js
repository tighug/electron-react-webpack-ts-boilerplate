/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(base, {
  target: "electron-main",
  mode: "production",

  entry: "./src/main/index.ts",
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.prod.js",
  },
});
