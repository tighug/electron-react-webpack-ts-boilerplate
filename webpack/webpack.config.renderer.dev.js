/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");
const { spawn } = require("child_process");

const port = 3000;
const publicPath = `http://localhost:${3000}/dist/`;

module.exports = merge(base, {
  target: "electron-renderer",
  mode: "development",

  entry: path.join(__dirname, "..", "/src/renderer/index.tsx"),
  output: {
    publicPath,
    filename: "renderer.dev.js",
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
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
  ],

  devServer: {
    port,
    publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    compress: true,
    hot: true,
    inline: true,
    noInfo: true,
    quiet: true,
    overlay: true,
    stats: "errors-only",

    before() {
      console.log("Starting Main Process...");
      spawn("npm", ["run", "start-main-dev"], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code))
        .on("error", (spawnError) => console.error(spawnError));
    },
  },
});
