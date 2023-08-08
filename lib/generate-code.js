const ncp = require('copy-paste')
// 生成代码
function generateCode(template, configList, flag = '{}', isCopy = true) {
  if (typeof configList === 'string') {
    configList = JSON.parse(configList)
  }
  return new Promise((resolve, reject) => {
    let result = configList
      .map((x) => {
        let str = template
        const args = x.split(' ')
        const leftFlag = flag[0]
        const rightFlag = flag[1]
        args.forEach((arg) => {
          const leftFlagIndex = str.indexOf(leftFlag)
          const rightFlagIndex = str.indexOf(rightFlag)
          const subString = str.substring(leftFlagIndex, rightFlagIndex + 1)
          str = str.replace(subString, arg)
        })
        return str
      })
      .join('\n')

    console.log(result)

    if (isCopy) {
      ncp.copy(result, function (err) {
        if (err) {
          reject(err)
        } else {
          console.log('copied in clipboard')
          resolve(result)
        }
      })
    } else {
      resolve(result)
    }
  })
}

module.exports = generateCode
exports.default = generateCode
