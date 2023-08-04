#!/usr/bin/env node
const generateCode = require('../lib/generate-code')
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
  .alias('s2a')
  .description(
    'make string join in array with character, will default copy to clipboard',
  )
  .argument('<string>', 'string: "1 2 3"')
  .option('-c, --copy', 'copy to clipboard')
  .option('-nc, --no-copy', 'not copy to clipboard')
  .option('-f, --flag <flag>', 'the flag of character to split string', ' ')
  .action((string, options) => {
    stringToArr(string, options.flag, options.copy)
  })

program
  .command('generate-code')
  .alias('gc')
  .description('generate code')
  .argument('<template>', 'template: <p>label:{label} -- value: {value}</p>')
  .argument(
    '<configList>',
    'configList: [label1 value1, label2 value2, label3 value3, label4 value4, label5 value5]',
  )
  .option('-f, --flag <flag>', 'the flag of character to split string', '{}')
  .option('-c, --copy', 'copy to clipboard')
  .option('-nc, --no-copy', 'not copy to clipboard')
  .action((template, configList, options) => {
    generateCode(template, configList, options.flag, options.copy)
  })

program.parse()
