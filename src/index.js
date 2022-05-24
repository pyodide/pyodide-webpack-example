async function loadPyodide() {
  const pyodide_pkg = await import("pyodide/pyodide.js");
  const pyodide = await pyodide_pkg.loadPyodide({
    indexURL:process.env.INDEX_URL// "/pyodide/" or jsdelivr CDN
  });

  pyodide.runPython(`
      import js

      main_div = js.document.getElementById("main")
      if main_div:
        main_div.innerHTML = "Loaded!"

      div = js.document.createElement("div")
      div.innerHTML = "<h1>Hello Pyodide! This element was created from Python</h1>"
      js.document.body.prepend(div)
  `);
}

loadPyodide();