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

### create (hex, opacity)

The create function creates a  hex format colour value with opacity.
The default format is that supported by modern web browers (#RRGGBBAA) however passing in the `prepend` flag will resolve to a different format for use in Anroid environments (#AARRGGBB).

Just pass in your full initial hex colour code and a floating point opacity value between 0 and 1 (just as you would with CSS)

Example:
```
import hexOpacity from 'hex-opacity';

const hexWithOpacity = hexOpacity.create('#1144b2', .3); // Result = '#1144B24D'
```

Example:
```
import hexOpacity from 'hex-opacity';

const hexWithOpacity = hexOpacity.create('#1144b2', .3, true); // Result = '#4D1144B2'
```


Enjoy! (☉ ‿ ⚆)
