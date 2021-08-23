const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    chunkFilename: "[name].[chunkhash].js",
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "eval-source",
};
