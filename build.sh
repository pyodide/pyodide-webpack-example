#!/bin/bash
set -e
set -o pipefail

npm ci

# Link in development build of Pyodide
if [ ${DEV_PYODIDE_PATH+x} ];
then 
    rm -rf node_modules/pyodide
    ln -s "$DEV_PYODIDE_PATH" node_modules/pyodide
fi

# build
npx webpack --mode production | tee build.log

# Exit with error if there were any warnings
(grep WARNING build.log > /dev/null) && exit 1
