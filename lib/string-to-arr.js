const ncp = require('copy-paste')

/**
 * Converts a string to an array by splitting it using the specified character.
 *
 * @param {string} raw - The string to be converted.
 * @param {string} [character=' '] - The character used to split the string. Defaults to a space.
 * @param {boolean} [isCopy=true] - Indicates whether to copy the resulting array to the clipboard. Defaults to true.
 * @return {Array} The resulting array after splitting the input string.
 */
function stringToArr(raw, character = ' ', isCopy = true) {
  let arr = []
  arr = raw.split(character)
  console.log(arr)
  if (isCopy) {
    ncp.copy(arr, function () {
      // complete...
      console.log('copied in clipboard')
    })
  }
  return arr
}

module.exports = stringToArr
exports.default = stringToArr
