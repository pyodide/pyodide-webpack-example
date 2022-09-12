async function loadPyodide() {
  const pyodide_pkg = await import("pyodide/pyodide.js");
  const pyodide = await pyodide_pkg.loadPyodide();
  pyodide.runPython(`
      print([x*x+1 for x in range(20)])
  `);
}

loadPyodide();
