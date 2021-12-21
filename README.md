# cLog.js
![author-image]
![js-image]
[![MIT License][license-image]][license-url]

![logo](helpers/logo1.png)

Minimalistic NodeJS library for more informative output in the console.log.

cLog provides three colors for more informative display of logs.
You can use:

Red - for the most important messages.

Green - to notify about completion of work or about a successfully received request.

Yellow - for warnings or implicit instructions.

You can also use cLog without passing an argument. In this case, the output will be the default color of your shell.

cLog also displays the current date and time using the dependency - [moment.js](https://github.com/moment/moment)


## Installation

Add the next line in package.json dependencies:
```javascript
"dependencies": {
    ...
    "cLog": "git+https://github.com/ddgryaz/cLog.js.git"
    ...
}
```

## Tutorial

Import cLog into your application:

```javascript
const cLog = require('cLog');

cLog('Error! User unavailable', 'red');
cLog('Success! User sync complete', 'green');
cLog('Warning! User structure not found', 'yellow');
cLog('This is just a regular log');
```

Output:

![output.png](helpers/output.png)

## License

cLog.js is freely distributable under the terms of the [MIT license][license-url].


[author-image]: https://img.shields.io/badge/Author-Dmitriy%20Dzyuman-blueviolet
[js-image]: https://img.shields.io/badge/Lang-JavaScript-yellow
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE