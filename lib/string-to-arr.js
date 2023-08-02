function stringToArr(raw, character = ' ', isCopy = true) {
  let arr = []
  arr = raw.split(character)
  if (isCopy) {
    // do something
  }
  return arr
}

module.exports = stringToArr
exports.default = stringToArr
