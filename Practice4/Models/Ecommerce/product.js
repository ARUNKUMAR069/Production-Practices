const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    productImage: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;