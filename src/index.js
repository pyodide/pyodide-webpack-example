import _ from 'lodash';

async function loadPyodide() {
    let pyodide_pkg = await import("pyodide/pyodide.js");
    let pyodide = await pyodide_pkg.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
    });
}

function component() {
    loadPyodide();

    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());