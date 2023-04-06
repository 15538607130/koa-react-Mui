
const router = require("koa-router")();
const { loginControll, registerControll } = require('../../app/controller/user')

// 模块路由前缀
router.prefix("/users");
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get("/", function (ctx, next) {
  console.log(3232323);
  // ctx.res.$success({ name: 'user' })
  ctx.body = {
    name: 123
  }
});
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *       - users
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
/**
 * 用户登录接口
 * @param {username} 用户名
 * @param {password} 用户密码
 */
router.post("/login", loginControll);
/**
 * @swagger
 * /api/users/register:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.post("/register", registerControll);

module.exports = router;
