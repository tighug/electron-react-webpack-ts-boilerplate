/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(base, {
  target: "electron-renderer",
  mode: "production",

  entry: path.join(__dirname, "..", "src/renderer/index.tsx"),
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "renderer.js",
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

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "/src/renderer/index.html"),
    }),
  ],
});
