console.log('Loaded routes');
var customer = require('../controllers/CustomerController.js');
module.exports = function(app){
    app.post('/customers', function(req ,res) {
        console.log('Inside POST /customers route');
        customer.newCustomer(req, res);
    })
    app.get('/customers', function(req, res) {
        customer.getAllCustomers(req, res);
    })
}
