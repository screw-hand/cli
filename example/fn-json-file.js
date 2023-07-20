import { jsonFile } from "../index.js";

const obj = {
  Client: "Alice",
  City: "London",
  Interests: ["football", "hiking", "gym"],
};

jsonFile(obj, "./data.json");
