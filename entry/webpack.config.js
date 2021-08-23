const path = require("path");

module.exports = {
  mode: "development",

  // entry: ["./src/page1.js", "./src/page2.js"],

  // entry: {
  //   page1: "./src/page1.js",
  //   page2: "./src/page2.js",
  // },

  entry: {
    page1: {
      import: "./src/page1.js",
      dependOn: "react-vendors",
    },
    page2: "./src/page2.js",
    "react-vendors": ["react", "react-dom", "prop-types"],
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
