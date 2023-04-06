const loginControll = async (ctx, next) => {
  const request = ctx.request.body;
  const { username, password } = request

  let sql = `insert into  user  ( name, password) VALUES ('${username}','${password}')`
  await ctx.db.query(sql)
  ctx.body = {
    "code": 200,
    "msg": "success",
    "data": "登录成功"
  }
}
const registerControll = async (ctx, next) => {
  const request = ctx.request.body;
  const { username, password } = request
  console.log(11111, request);
  let sql = `insert into  user  ( name, password) VALUES ('${username}','${password}')`
  await ctx.db.query(sql)
  ctx.body = {
    "code": 200,
    "msg": "success",
    "data": "登录成功"
  }
}



module.exports = { loginControll, registerControll }