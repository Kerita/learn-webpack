const path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "./src"),
  entry: {
    page1: "./page1.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "force-strict-loader",
          options: {
            sourceMap: true,
          },
        },
      },
    ],
  },
};
