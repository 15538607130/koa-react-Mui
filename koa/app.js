const Koa = require('koa')

const app = new Koa()
const db = require('./db/index')
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const router = require("./routes/index");
const cors = require("koa-cors");
const { koaSwagger } = require('koa2-swagger-ui')
const swagger = require('./routes/swagger')
// 注册error
onerror(app);
// 注册bodyparser
app.use(bodyparser());
// 注册日志
app.use(logger());
app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})
// 注册静态资源
app.use(require("koa-static")(__dirname + "/public"));
// 注册跨域
app.use(cors());
// 注册自定义中间件
require('./middlewares/index')(app);
// 注册路由
app.use(router.routes(), router.allowedMethods());
app.use(swagger.routes(), swagger.allowedMethods());
app.use(koaSwagger({
  routePrefix: '/swagger', // 接口文档访问地址
  swaggerOptions: {
    url: '/swagger.json' // example path to json 其实就是之后swagger-jsdoc生成的文档地址
  }
}))
// logger-handling
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});






module.exports = app