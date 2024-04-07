var express = require('express');
var productService = require('../services/productService')
var router = express.Router();

/* GET all products listing. */
router.get('/', function(req, res, next) {
  const products = productService.getAllProducts();
  res.send(products)
});

/* GET one listing. */
router.get('/:uuid', function(req, res, next) {
  const product = productService.getProduct(req.params.uuid);
  res.send(product)
});

module.exports = router;
