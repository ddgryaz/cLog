# cLog.js
![author-image]
![js-image]
[![MIT License][license-image]][license-url]

Library for more informative output in the console.log

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

<span style="color:red">2021-12-21 11:50 - Error! User unavailable</span>

<span style="color:green">2021-12-21 11:50 - Success! User sync complete</span>

<span style="color:yellow">2021-12-21 11:50 - Warning! User structure not found</span>

2021-12-21 11:50 - This is just a regular log


## License

cLog.js is freely distributable under the terms of the [MIT license][license-url].


[author-image]: https://img.shields.io/badge/Author-Dmitriy%20Dzyuman-blueviolet
[js-image]: https://img.shields.io/badge/Lang-JavaScript-yellow
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE