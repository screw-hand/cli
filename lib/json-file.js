const fs = require('fs');


function jsonFile(objString, filename) {
  try {
    // FIXME create a normal json file
    let json = JSON.parse(objString)
    console.log(json)
    let jsonStr = JSON.stringify(json, null, 2)
    fs.writeFileSync(filename, jsonStr);
    console.log(`Data written to file ${filename}`);
  } catch (e) {
    console.error(e)
  }
}

module.exports = jsonFile;
exports.default = jsonFile;
