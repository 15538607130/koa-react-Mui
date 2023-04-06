const path = require('path')
const autoLoadFile = require('../utils/autoLoadFile')


let filePath = path.join(__dirname, './middleware')

let fileList = autoLoadFile(filePath, false)

function install (app) {
  fileList.forEach(item => {
    app.use(item.data)
  })
}
module.exports = install