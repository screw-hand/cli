const fs = require('fs');
const path = require('path');
const untildify = require('untildify-commonjs');

/**
 * Generates a JSON file from the given raw data and saves it to the specified filename.
 *
 * @param {string|object} raw - The raw data to be converted to JSON.
 * @param {string} filename - The name of the file to save the JSON data to.
 * @return {object} - The JSON object generated from the raw data.
 */
function jsonFile(raw, filename) {
  let json = {};
  try {
    if (typeof raw === 'object') {
      raw = JSON.stringify(raw, null, 2)
    } 
    if (typeof raw === 'string') {
      json = JSON.parse(raw)
    }
    const jsonStr = JSON.stringify(json, null, 2)
    const indexJSONFIle = filename.lastIndexOf(".json") >= 0
    if (!indexJSONFIle) {
      filename += `.json`
    }
    const pathName = untildify(filename)
    fs.writeFileSync(pathName, jsonStr);
    console.log(`Data written to file ${path.resolve(pathName)}`);
  } catch (e) {
    console.error(e)
  }
  return json
}

module.exports = jsonFile;
exports.default = jsonFile;
