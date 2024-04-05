const User = require('../models/User');
const Product = require('../models/Product');
const SpecialPrice = require('../models/SpecialPrice');

const getProducts = (req, res) => {
    Product.find({ stock: { $gt: 0 } })
        .then(products => {
            return res.status(200).json({
                ok: true,
                status: 'success',
                products
            })
        })
        .catch(err => {
            return res.status(404).json({
                ok: false,
                status: 'Not found products'
            })
        })
}

const priceProduct = (req, res) => {
    let userId = req.params.user_id;
    let productId = req.params.product_id;

    let specialPrice = 0;
    SpecialPrice.findOne({ user: userId, product: productId })
        .select('price')
        .then(result => {
            if (result) {
                specialPrice = result.price;
                return res.status(200).json({
                    ok: true,
                    status: 'success',
                    specialPrice
                })
            } else {
                Product.findOne({ _id: productId }).select('price')
                    .then(result => {
                        return res.status(200).json({
                            ok: true,
                            status: 'success',
                            price: result.price
                        })
                    })
            }
        })
        .catch(error => {
            console.error('Error al buscar Precio:', error);
        });
}
module.exports = {
    getProducts,
    priceProduct
}