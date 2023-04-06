const mysql = require('mysql')
const { database } = require('../config/database')

const pool = mysql.createPool(database)

exports.query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
        return
      }
      connection.query(sql, values, (err, results) => {
        if (err) {
          reject(err)
          return
        }
        resolve(results)
        // 释放链接池
        connection.release()
      })
    })
  })
}