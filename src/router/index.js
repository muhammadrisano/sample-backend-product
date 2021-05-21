const express = require('express')
const productRoute = require('../router/product')
const route = express.Router()


route.use('/products', productRoute)

module.exports = route