function stringToArr(raw, character = ' ', isCopy = true) {
  console.log(character)
  let arr = []
  arr = raw.split(character)
  console.log(arr)
  if (isCopy) {
    // do something
  }
  return arr
}

module.exports = stringToArr
exports.default = stringToArr
