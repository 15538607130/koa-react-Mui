const context = require('../utils/autoLoadFile')
const router = require('koa-router')()
const path = require('path')

function importAll (arr) {
  arr.forEach((key) => {
    console.log(key);
    // 这种方式为嵌套路由
    router.use("/api", key.data.routes(), key.data.allowedMethods());
  });
}
let filePath = path.join(__dirname, './route')
let arr = context(filePath, false)
importAll(arr)

module.exports = router