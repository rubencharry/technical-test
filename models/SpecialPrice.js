const { Schema, model } = require('mongoose');

const specialpriceSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    product: {
        type: Schema.ObjectId,
        ref: 'Product'
    },
    price: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('SpecialPrice', specialpriceSchema, 'special_prices');