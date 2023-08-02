const ncp = require('copy-paste')
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
