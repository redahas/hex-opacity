const pad = require('pad');

/**
 * Converts a float between 0 and 1 to rounded base 16 value
 * 
 * @param {number} float - A floating point value between 0 and 1
 * @returns {string}
 */
const floatToHex = float => Math.round(float * 255).toString(16);

/**
 * Pads strings with 0 on the left
 * 
 * @param {string} hex
 * @returns {string}
 */
const padHex = hex => pad(2, hex, '0');

/**
 * Checks that input is a valid hex colour code
 * 
 * @param {string} str 
 * @returns {string}
 */
const isValidHex = str => !!str.match(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i);

/**
 * Converts a 3 character hex code to 6 characters for consistency
 * 
 * @param {string} hex 
 * @returns {string}
 */
const formatColourHex = hex => {
  const colour = hex.substr(1);

  if (colour.length === 6) return colour;

  return `${colour[0].repeat(2)}${colour[1].repeat(2)}${colour[2].repeat(2)}`;
}

/**
 * Prepares colour and opacity hex values separately
 * 
 * @param {string} hex - The hexidecimal colour code you wish to add opacity to
 * @param {number} opacity - A floating point value between 0 and 1
 * @returns {object}
 */
const prepareHexPartials = (hex, opacity) => {
  if (isValidHex(hex)) {
    const colourHex = formatColourHex(hex);
    const opacityHex = padHex(floatToHex(opacity));

    return {
      colour: colourHex,
      opacity: opacityHex,
    };
  } else {
    throw new Error('Input not a recognised hexidecimal value');
  }
}

/**
 * Add opacity to a hexidecimal colour code in #RRGGBBAA format
 * 
 * @param {string} hex - The hexidecimal colour code you wish to add opacity to
 * @param {number} opacity - A floating point value between 0 and 1
 * @returns {string}
 */
const add = (hex = '', opacity) => {
  let result = hex;

  if (opacity) {
    const { colour: cHex, opacity: oHex } = prepareHexPartials(hex, opacity);
    result = `#${cHex}${oHex}`;
  }
  
  return result.toUpperCase();
};

/**
 * Add opacity to a hexidecimal colour code in #AARRGGBB format (ie: Android)
 * 
 * @param {string} hex - The hexidecimal colour code you wish to add opacity to
 * @param {number} opacity - A floating point value between 0 and 1
 * @returns {string}
 */
const androidAdd = (hex = '', opacity) => {
  let result = hex;

  if (opacity) {
    const { colour: cHex, opacity: oHex } = prepareHexPartials(hex, opacity);
    result = `#${oHex}${cHex}`;
  }

  return result.toUpperCase();
}

module.exports = {
  add,
  androidAdd,
};

