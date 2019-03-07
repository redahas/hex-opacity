# hex-opacity

Simple module for adding opacity to hexidecimal colour codes

Available on npm [here](https://www.npmjs.com/package/hex-opacity)

## Setup

### To install:

`yarn add hex-opacity`

or

`npm i hex-opacity`

### Import

Then import into whichever file you intent to use it in with ES6 or CommonJS:

ES6: `import hexOpacity from 'hex-opacity';`

CJS: `const hexOpacity = require('hex-opacity');`

## API:

There are only two API methods to add opacity to hex colours using #RRGGBBAA or #AARRGGBB formats.

### add (hex, opacity)

The add function adds opacity to hex format supported by modern web browers (#RRGGBBAA).

Just pass in your full initial hex colour code and a floating point opacity value between 0 and 1 (just as you would with CSS)

Example:
```
import hexOpacity from 'hex-opacity';

const hexWithOpacity = hexOpacity.add('#1144b2', .3); // Result = '#1144B24D'
```

### androidAdd (hex, opacity)

The add function adds opacity to hex format supported by modern web browers (#AARRGGBB).

Just pass in your full initial hex colour code and a floating point opacity value between 0 and 1 (just as you would with CSS)

Example:
```
import hexOpacity from 'hex-opacity';

const hexWithOpacity = hexOpacity.androidAdd('#1144b2', .3); // Result = '#4D1144B2'
```


Enjoy! (☉ ‿ ⚆)
