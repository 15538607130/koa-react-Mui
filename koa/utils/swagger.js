const router = require('koa-router')() //引入路由函数
const path = require('path')

const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  info: {
    title: 'koa服务端API',
    version: '1.0.0',
    description: 'koa服务端API接口文档'
  },
  host: 'localhost:30001', // 接口文档访问地址为：localhost:3000/swagger
  basePath: '/' // Base path (optional)
}
const options = {
  definition: swaggerDefinition,
  apis: [path.join(__dirname, '../routes/route/*.js')] // 写有注解的router的存放地址, 最好path.join()
}
const swaggerSpec = swaggerJSDoc(options)

// 通过路由获取生成的注解文件
router.get('/swagger.json', async function (ctx) {
  ctx.set('Content-Type', 'application/json')
  ctx.body = swaggerSpec
})
module.exports = router