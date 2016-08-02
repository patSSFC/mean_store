var mongoose = require('mongoose'),
    Order = mongoose.model('Order'),
    Customer = mongoose.model('Customer'),
    Product = mongoose.model('Product');

module.exports = {
    newOrder : function(req, res) {
        // console.log(req.body);
        var order = new Order(req.body);
        console.log(order);
        order.save(function(err, order) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(order);
            }
        });
    },
    getAllOrders : function(req, res) {
        Order.find({})
            .populate('_customer', 'name')
            .populate('_product', 'name')
            .exec(function(err, orders) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(orders);
                }
            })
    }
}
