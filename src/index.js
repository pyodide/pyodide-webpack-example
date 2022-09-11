async function loadPyodide() {
  const pyodide_pkg = await import("pyodide/pyodide.js");
  const pyodide = await pyodide_pkg.loadPyodide();
  pyodide.runPython(`
      import js
      div = js.document.createElement("div")
      div.innerHTML = "<h1>Hello Pyodide! This element was created from Python</h1>"
      js.document.body.prepend(div)
  `);
}

loadPyodide();
