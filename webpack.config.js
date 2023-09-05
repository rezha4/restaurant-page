const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    order: "./src/order.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
        title: "The Bannered Mare",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
};