# cLogs.js
![author-image]
![js-image]
[![MIT License][license-image]][license-url]

![logo](helpers/logos.png)

Minimalistic NodeJS library for more informative output in the console.log.

cLogs provides three colors for more informative display of logs.
You can use:

* Red - for the most important messages.

* Green - to notify about completion of work or about a successfully received request.

* Yellow - for warnings or implicit instructions.

You can also use cLogs without passing an argument. In this case, the output will be the default color of your shell.

cLogs also displays the current date and time using the dependency - [moment.js](https://github.com/moment/moment)


## Installation

Use npm:
```shell
npm install clogsjs
```

## Tutorial

Import cLogs into your application:

```javascript
const cLogs = require('clogsjs');

cLogs('Error! User unavailable', 'red');
cLogs('Success! User sync complete', 'green');
cLogs('Warning! User structure not found', 'yellow');
cLogs('This is just a regular log');
```

Output:

![output.png](helpers/output.png)

## License

cLogs.js is freely distributable under the terms of the [MIT license][license-url].


[author-image]: https://img.shields.io/badge/Author-Dmitriy%20Dzyuman-blueviolet
[js-image]: https://img.shields.io/badge/Lang-JavaScript-yellow
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE