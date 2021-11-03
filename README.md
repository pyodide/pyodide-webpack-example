# Pyodide Webpack Example

This project is an minimal working example of Pyodide and Webpack. 
- Pyodide JavaScript package is installed from https://www.npmjs.com/package/pyodide
- Webpack and html page setup is from https://webpack.js.org/guides/getting-started/, two files are added and tweaked   
    - `src/index.js`: contain the code for
        - dynamic import Pyodide JavaScript package.
        - `loadPyodide`: download Pyoddie files setup Pyodide environment.
        - `pyodide.runPython`: show HTML DOM text added by Pyodide Python.
    - `dist/index.html`: use built `main.js`.

## How to run 

- Execute `npm install` to install Pyodide JS package. 
- Execute `npx webpack` to generated `dist/main.js` from `src/index.js`. There is no webpack config file needed. 

