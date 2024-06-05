const Order = require('/models/Order');

exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getOrderStatistics = async (req, res) => {
    try {
        const totalOrders = await Order.countDocuments();
        const averageValue = await Order.aggregate([{ $group: { _id: null, avgValue: { $avg: '$totalPrice' } } }]);
        const statusCounts = await Order.aggregate([
            { $group: { _id: '$status', count: { $sum: 1 } } }
        ]);

        res.status(200).json({
            totalOrders,
            averageValue: averageValue[0].avgValue,
            statusCounts
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
