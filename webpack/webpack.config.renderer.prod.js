import path from "path";
import { merge } from "webpack-merge";
import base from "./webpack.config.base";

export default merge(base, {
  target: "electron-renderer",
  mode: "production",

  entry: "./src/renderer/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "./dist/",
    filename: "renderer.prod.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
});
