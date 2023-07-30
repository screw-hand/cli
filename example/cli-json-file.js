const { exec } = require('child_process')

const obj = {
  Client: 'Alice',
  City: 'London',
  Interests: ['football', 'hiking', 'gym'],
}

const command = `cli json-file '${JSON.stringify(obj)}' ~/Desktop/data.json`

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
