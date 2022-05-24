# Pyodide Webpack Example

This project is a minimal working example of Pyodide and Webpack.

# Running the demo locally

```bash
git clone git@github.com:pyodide/pyodide-webpack-example.git
cd pyodide-webpack-example

npm run download-pyodide # MUST be run prior to install.
npm install

npm run dev # Dev mode: Live-reload, etc.

npm run build # Build app in prod mode

# #####################
# Viewing built app
# #####################

npm run serve # webpack serve in prod mode. (Ongoing process.)

npm run preview # Launch static html page w/ xdg-open

# Alternative ways of doing the same thing (if you don't have xdg-open):
chromium ./public/index.html
firefox ./public/index.html
# [webbrowser] ./public/index.html
```

## Installing pyodide as a package (`download-pyodide`)

Script [`./scripts/install_pyodide`](./scripts/install_pyodide):

1. Downloads the `pyodide-build-{version}.tar.bz2 ` build file from the [pyodide releases page](https://github.com/pyodide/pyodide/releases).
2. Extracts the `*.tar.bz2` archive contents to `./public/pyodide`.

Notes:

- Current config is to download from [v0.20.1a1](https://github.com/pyodide/pyodide/releases/tag/0.20.1a1). Edit `DOWNLOAD_URL` in [.env.public](./..env.public) to change the version.
- Due to security issues, opt not to use a [`preinstall` script](https://docs.npmjs.com/cli/v6/using-npm/scripts#best-practices).
- We dump the contents into [public/pyodide](./public/pyodide) dir so that can make use of various wheels, etc.
- Alternatively, we can fetch additional files of interest from the jsdelivr CDN. Set `INDEX_URL=[CDN URL]` in [.env.public](./..env.public) to cause the app to use these files. (For caching reasons, this should probably be preferred.)
- Attempting to use the [npmjs pyodide package](https://www.npmjs.com/package/pyodide) via `npm i pyodide` was presenting issues on a few fronts:
    1. The package is not built: Had to modify the the webpack config to handle typescript.
    2. Does not appear that the package's dependencies are installed on installation?
    3. Complaints in `pyodide/error_handling.gen.ts(215,47)`: `TS2694: Namespace 'ErrorStackParser' has no exported member 'StackFrame'.`
- A final alternative involves cloning the full pyodide repo, building it, and copying in the result.


## Tested demo environment

The demo was tested and verified to work in the following environment:

```bash
❯ npx envinfo --system --npmPackages '{pyodide,pyodide/*,webpack}' --binaries --browsers

  System:
    OS: Linux 5.10 Manjaro Linux
    CPU: (8) x64 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz
    Memory: 1.94 GB / 15.34 GB
    Container: Yes
    Shell: 5.9 - /usr/bin/zsh
  Binaries:
    Node: 16.13.0 - ~/.nvm/versions/node/v16.13.0/bin/node
    Yarn: 1.22.15 - ~/.nvm/versions/node/v16.13.0/bin/yarn
    npm: 8.6.0 - ~/.nvm/versions/node/v16.13.0/bin/npm
  Browsers:
    Brave Browser: 101.1.38.115
    Chromium: 101.0.4951.64
    Firefox: 100.0
  npmPackages:
    pyodide: file:public/pyodide => 0.20.1-alpha.1
    webpack: ^5.60.0 => 5.60.0
```