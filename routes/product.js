const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/products', ProductController.getProducts)
router.get('/price/:user_id/:product_id', ProductController.priceProduct)

module.exports = router