import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import base from "./webpack.config.base";
import { spawn } from "child_process";

const port = 3000;
const publicPath = `http://localhot:${3000}/dist`;

export default merge(base, {
  target: "electron-renderer",
  mode: "development",

  entry: "./src/renderer/index.tsx",
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
    contentBase: path.join(__dirname, "dist"),
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
