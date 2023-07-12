#!/usr/bin/env node
const jsonFile = require('../lib/json-file');
const pkg = require('./../package.json')
const { Command } = require("commander");

const program = new Command()

program
  .name('cli')
  .description(pkg.description)
  .version(pkg.version)


program
  .command("json-file")
  .description("make json or json string to a json file")
  .argument("<string>", `json string: '{"arr": [1,2,3]}'`)
  .argument("<filename>", "filename: data or data.json")
  .action(jsonFile);

program.parse()