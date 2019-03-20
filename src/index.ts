const pad = require('pad');

/**
 * Converts a float between 0 and 1 to rounded base 16 value
 */
const floatToHex = (float: number): string => Math.round(float * 255).toString(16);

/**
 * Pads strings with 0 on the left
 */
const padHex = (hex: string): string => pad(2, hex, '0');

/**
 * Checks that input is a valid hex colour code
 */
const isValidHex = (str: string): boolean => !!str.match(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i);

/**
 * Converts a 3 character hex code to 6 characters for consistency
 */
const formatColourHex = (hex: string): string => {
  const colour = hex.substr(1);

  if (colour.length === 6) return colour;

  return `${colour[0].repeat(2)}${colour[1].repeat(2)}${colour[2].repeat(2)}`;
}

/**
 * Prepares colour and opacity hex values separately
 */
const prepareComponents = (hex: string, opacity: number): {
  colour: string,
  opacity: string
} => {
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

interface IHexComponents {
  colour: string;
  opacity: string;
}

/**
 * Add opacity to a hexidecimal colour code in #RRGGBBAA format
 */
const appendHexOpacity = ({ opacity, colour }: IHexComponents ): string => `#${colour}${opacity}`;

/**
 * Add opacity to a hexidecimal colour code in #AARRGGBB format (ie: Android)
 */
const prependHexOpacity = ({ opacity, colour }: IHexComponents ): string => `#${opacity}${colour}`;

const create = (hex: string = '', opacity = 1, prepend = false): string => {
  const hexComponents = prepareComponents(hex, opacity);
  const result = (prepend ? prependHexOpacity : appendHexOpacity)(hexComponents);

  return result.toUpperCase();
};

module.exports = { create };

