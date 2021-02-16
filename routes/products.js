const router = require('express').Router();
const products = require('../services/products')

router.route('/:id?')
  .get(products.getAllProducts)
  .post(products.addProducts)
  .put(products.updateProducts)
  .delete(products.deleteProducts);

module.exports = router