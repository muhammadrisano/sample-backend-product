const productModel = require('../model/product')
const helpers = require('../helpers/helpers')
const createError = require('http-errors')

exports.getProducts = (req, res, next) => {
  productModel.getProducts()
    .then((result) => {
      helpers.response(res, result, 200)
    })
    .catch((err) => {
      console.log(err);
      const error = new createError[500]
      next(error)
    })
}
exports.insertProducts = (req, res, next) => {
  const { name, price, size, description } = req.body
  const data = {
    name,
    price,
    size,
    description
  }
  productModel.insertProducts(data)
    .then(() => {
      helpers.response(res, data, 200)
    })
    .catch((err) => {
      console.log(err);
      const error = new createError[500]
      next(error)
    })
}
exports.updateProducts = (req, res, next) => {
  const id = req.params.id
  const { name, price, size, description } = req.body
  const data = {
    name,
    price,
    size,
    description,
  }
  productModel.updateProducts(id, data)
    .then(() => {
      helpers.response(res, { ...data, id }, 200)
    })
    .catch((err) => {
      console.log(err);
      const error = new createError[500]
      next(error)
    })
}

exports.deleteProducts = (req, res, next) => {
  const id = req.params.id

  productModel.deleteProducts(id)
    .then((result) => {
      helpers.response(res, { id }, 200)
    })
    .catch((err) => {
      console.log(err);
      const error = new createError[500]
      next(error)
    })
}