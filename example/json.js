const jsonFile = require("../lib/json-file");

const obj = { Client: "Alice", City: "London", Interests: ["football", "hiking", "gym"] }

jsonFile(obj, '/Users/wu/Desktop/data.json')
