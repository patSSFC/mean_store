var mongoose = require('mongoose'),
    Customer = mongoose.model('Customer');

module.exports = {
    newCustomer : function(req, res) {
        console.log(req.body);
        var customer = new Customer({name: req.body.name});
        customer.save(function(err) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({message : 'Customer account created!'});
            }
        })
    },
    getAllCustomers : function(req, res) {
        Customer.find({}, function(err, users) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(users);
            }
        })
    },
    deleteCustomer : function(req, res) {
        console.log('inside delete function');
        console.log(req.params);
        Customer.findOneAndRemove({_id : req.params.c_id}, function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({message : "Customer account deleted!"})
            }
        })
    }
}
