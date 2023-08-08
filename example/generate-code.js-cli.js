const { exec } = require('child_process')

const command = `cli generate-code '<p>label:{label} -- value: {value}</p>' '[ "label1 value1", "label2 value2", "label3 value3", "label4 value4", "label5 value5" ]'`

exec(command, (error, stdout, stderr) => {
  console.log(command)
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})
