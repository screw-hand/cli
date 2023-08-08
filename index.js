const jsonFile = require('./lib/json-file')
const stringToArr = require('./lib/string-to-arr')
const generateCode = require('./lib/generate-code')

const Index = {
  jsonFile,
  stringToArr,
  generateCode,
}

module.exports = Index
exports.default = Index
