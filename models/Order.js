const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
    quantity: Number,
    totalPrice: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);