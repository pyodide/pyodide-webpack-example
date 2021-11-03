async function loadPyodide() {
  const pyodide_pkg = await import("pyodide/pyodide.js");
  const pyodide = await pyodide_pkg.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
  });

  pyodide.runPython(`
      import js
      div = js.document.createElement("div")
      div.innerHTML = "<h1>Hello Pyodide! This element was created from Python</h1>"
      js.document.body.prepend(div)
  `);
}

loadPyodide()