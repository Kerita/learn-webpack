const path = require("path");

module.exports = {
  // mode: "development",
  mode: "production",
  context: path.join(__dirname, "./src"),
  entry: {
    page1: {
      import: "./page1.js",
    },
  },
  optimization: {
    usedExports: true,
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
