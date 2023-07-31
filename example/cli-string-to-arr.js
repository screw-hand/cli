const { exec } = require('child_process')

const string = '1,2,3'

const command = `cli string-to-arr '${string}' -f ,`

exec(command, (error, stdout, stderr) => {
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
