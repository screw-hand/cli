#!/usr/bin/env node
const jsonFile = require('../lib/json-file')
const stringToArr = require('../lib/string-to-arr')
const pkg = require('./../package.json')
const { Command } = require('commander')

const program = new Command()

program.name('cli / cli-me').description(pkg.description).version(pkg.version)

program
  .command('json-file')
  .alias('json')
  .description('make object or json string to a json file')
  .argument('<string>', `json string: '{"arr": [1,2,3]}'`)
  .argument('<filename>', 'filename: data or data.json')
  .action(jsonFile)

program
  .command('string-to-arr')
  .description(
    'make string join in array with character, will default copy to clipboard',
  )
  .argument('<string>', 'string: "1 2 3"')
  .option('-c, --copy', 'copy to clipboard')
  .option('-nc, --no-copy', 'not copy to clipboard')
  .option('-f, --flag <flag>', 'the flag of character to split string', ' ')
  .action((string, options) => {
    stringToArr(string, options.flag || ' ', options.copy)
  })

program.parse()
