var fs = require('fs')
function inputStr() {
  return new Promise(function(resolve, reject) {
    fs.readFile('input.txt', 'utf8', (err, data) => {
      err ? reject(err) : resolve(data.toString())
    })
  })
}

module.exports = inputStr
