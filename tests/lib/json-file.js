const fs = require('fs');
const os = require('os');
const path = require('path');
const untildify = require('untildify-commonjs');
const jsonFile = require('../../lib/json-file')

describe("jsonFile", () => {
  let filename 

  afterEach(() => {
    if (fs.existsSync(filename)) {
      fs.unlinkSync(filename);
    } else if (fs.existsSync(`${filename}.json`)) {
      fs.unlinkSync(`${filename}.json`);
    }
  });

  // Test case 1: Testing with raw data as object
  test("should generate a JSON file from the raw data object", () => {
    const rawData = { name: "John Doe", age: 25 };
    filename = `test${Date.now()}.json`;

    const result = jsonFile(rawData, filename);

    const filePath = path.resolve(untildify(filename));
    const fileContent = fs.readFileSync(filePath, "utf8");
    const expectedContent = JSON.stringify(rawData, null, 2);

    expect(result).toEqual(rawData);
    expect(fileContent).toEqual(expectedContent);
  });

  // Test case 2: Testing with raw data as string
  test("should generate a JSON file from the raw data string", () => {
    const rawData = '{"name": "John Doe", "age": 25}';
    filename = `test${Date.now()}.json`;

    const result = jsonFile(rawData, filename);

    const filePath = path.resolve(untildify(filename));
    const fileContent = fs.readFileSync(filePath, "utf8");
    const expectedContent = JSON.stringify(JSON.parse(rawData), null, 2);

    expect(result).toEqual(JSON.parse(rawData));
    expect(fileContent).toEqual(expectedContent);
  });

  // Test case 3: Testing with filename without .json extension
  test("should add .json extension to the filename if it does not have one", () => {
    const rawData = { name: "John Doe", age: 25 };
    filename = `test${Date.now()}`;

    const result = jsonFile(rawData, filename);

    const filePath = path.resolve(untildify(`${filename}.json`));
    const fileContent = fs.readFileSync(filePath, "utf8");
    const expectedContent = JSON.stringify(rawData, null, 2);

    expect(result).toEqual(rawData);
    expect(fileContent).toEqual(expectedContent);
  });

  // Test case 4: Testing with invalid JSON data
  test("should handle error when given invalid JSON data", () => {
    const rawData = '{name: "John Doe", age: 25}';
    filename = "test.json";

    const result = jsonFile(rawData, filename);

    expect(result).toEqual({});
  });

  // Test case 5: Testing with absolute path
  test("should handle absolute path correctly", () => {
    const rawData = { name: "John Doe", age: 25 };
    filename = path.join(os.tmpdir(), `test${Date.now()}.json`);

    const result = jsonFile(rawData, filename);

    const fileContent = fs.readFileSync(filename, "utf8");
    const expectedContent = JSON.stringify(rawData, null, 2);

    expect(result).toEqual(rawData);
    expect(fileContent).toEqual(expectedContent);
  });

  // Test case 6: Testing with relative path
  test("should handle relative path correctly", () => {
    const rawData = { name: "John Doe", age: 25 };
    filename = `./test${Date.now()}.json`;

    const result = jsonFile(rawData, filename);

    const filePath = path.resolve(untildify(filename));
    const fileContent = fs.readFileSync(filePath, "utf8");
    const expectedContent = JSON.stringify(rawData, null, 2);

    expect(result).toEqual(rawData);
    expect(fileContent).toEqual(expectedContent);
  });
})