/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(base, {
  target: "electron-main",
  mode: "production",

  entry: path.join(__dirname, "..", "src/main/index.ts"),
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "main.js",
  },

  node: {
    __dirname: false,
    __filename: false,
  },
});
