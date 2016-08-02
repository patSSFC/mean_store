var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

module.exports = {
    postNewProduct : function(req, res) {
        console.log(req.body);
        var product = new Product(req.body);
        product.save(function(err, product) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(product);
            }
        });
    },
    getAllProducts : function(req, res) {
        Product.find({}, function(err, products) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(products);
            }
        })
    }
}
