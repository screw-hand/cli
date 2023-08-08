const generateCode = require('../lib/generate-code')

const template = '<p>label:{label} -- value: {value}</p>'

const configList = [
  'label1 value1',
  'label2 value2',
  'label3 value3',
  'label4 value4',
  'label5 value5',
]

generateCode(template, configList, '{}')
