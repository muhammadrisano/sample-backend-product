const connection = require('../configs/db/mysql')
exports.getProducts=()=>{
  return new Promise((resolve, reject)=>{
    connection.query("SELECT * FROM products ORDER BY id desc", (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error(err))
      }
    })
  })
}
exports.insertProducts = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO products SET ?", data, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error(err))
      }
    })
  })
}
exports.updateProducts = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE products SET ? WHERE id = ?", [data, id], (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error(err))
      }
    })
  })
}
exports.deleteProducts = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM products WHERE id = ?", id, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error(err))
      }
    })
  })
}

exports.getProductsById =(id)=>{
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM products WHERE id = ?",id , (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(new Error(err))
      }
    })
  })
}