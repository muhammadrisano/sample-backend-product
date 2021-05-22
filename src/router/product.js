const express = require('express')
const productController = require('../controller/product')
const route = express.Router()

route.get('/', productController.getProducts)
route.get('/:id', productController.getProductsById)
route.delete('/:id', productController.deleteProducts)
route.post('/', productController.insertProducts)
route.put('/:id', productController.updateProducts)

module.exports = route