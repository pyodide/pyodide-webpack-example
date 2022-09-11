const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    // Copy files pyodide.js will load asynchronously
    new CopyPlugin({
      patterns: [
        {
          from: require.resolve("pyodide/repodata.json"),
          to: "pyodide/repodata.json",
        },
        {
          from: require.resolve("pyodide/pyodide_py.tar"),
          to: "pyodide/pyodide_py.tar",
        },
        {
          from: require.resolve("pyodide/pyodide.asm.data"),
          to: "pyodide/pyodide.asm.data",
        },
        {
          from: require.resolve("pyodide/pyodide.asm.js"),
          to: "pyodide/pyodide.asm.js",
        },
        {
          from: require.resolve("pyodide/pyodide.asm.wasm"),
          to: "pyodide/pyodide.asm.wasm",
        },
      ],
    }),
  ],
};
