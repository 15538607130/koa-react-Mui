
async function message (ctx, next) {
  ctx.res.$success = (data) => {
    ctx.body = {
      code: 200,
      data: data,
      message: '成功'
    }
  }
  ctx.req.$error = (error) => {
    ctx.body = {
      code: 500,
      data: null,
      message: error
    }
  }
  await next()
}

module.exports = message