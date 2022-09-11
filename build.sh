#!/bin/bash
set -e
set -o pipefail

npm ci

# Link in development build of Pyodide
if [ -z ${DEV_PYODIDE_PATH+x} ];
then 
    rm -rf node_modules/pyodide
    ln -s $DEV_PYODIDE_PATH node_modules/pyodide
fi

# build
npx webpack --mode production | tee build.log

# Check for warnings and set nonzero exit code if there were
! (grep WARNING build.log > /dev/null)
exit $?
