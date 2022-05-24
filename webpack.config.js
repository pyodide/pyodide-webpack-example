const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [],
    noParse: [require.resolve("pyodide/pyodide.js")],
  },
  plugins: [new Dotenv({ path: "./.env.public" })],
};
