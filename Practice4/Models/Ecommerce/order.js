const mongoose = require('mongoose');



const orderItemSchema = new mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});




const orderSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orderPrice: {
        type: Number,
        required: true
    },
    orderItems: {
        type: [orderItemSchema],
    },
    adress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Processing", "Shipped", "Delivered"],
        required: true,
        default: "Pending"
    },



}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;