import path from "path";
import { merge } from "webpack-merge";
import base from "./webpack.config.base";

export default merge(base, {
  target: "electron-main",
  mode: "production",

  entry: "./src/main/index.ts",
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.prod.js",
  },
});
