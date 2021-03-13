const mysql = require('mysqli')

let connection = new mysql({
  host: 'locahost',
  port: 3306,
  user: 'root',
  password: '',
  db: 'ecommerce',
})

let db = connection.emit(false, '')

module.exports = {
  database: db,
}
