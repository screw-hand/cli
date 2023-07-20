#!/usr/bin/env node
import pkg from './../package.json' assert { type: "json" };
import jsonFile from '../lib/json-file.js';
import { Command } from "commander";

const program = new Command()
const { description, version } = pkg

program
  .name('cli / cli-me')
  .description(description)
  .version(version)

program
  .command("json-file")
  .alias('json')
  .description("make object or json string to a json file")
  .argument("<string>", `json string: '{"arr": [1,2,3]}'`)
  .argument("<filename>", "filename: data or data.json")
  .action(jsonFile);

program.parse()