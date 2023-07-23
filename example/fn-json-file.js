const { jsonFile } = require("..");

const obj = {
  Client: "Alice",
  City: "London",
  Interests: ["football", "hiking", "gym"],
};

jsonFile(obj, "~/Desktop/data.json");
