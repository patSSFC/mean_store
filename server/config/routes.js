console.log('Loaded routes');
var customer = require('../controllers/CustomerController.js');
var product = require('../controllers/productsController.js');
var order = require('../controllers/orderController.js')
module.exports = function(app){
    app.post('/customers', function(req ,res) {
        console.log('Inside POST /customers route');
        customer.newCustomer(req, res);
    });
    app.get('/customers', function(req, res) {
        console.log('Inside GET /customers route');
        customer.getAllCustomers(req, res);
    });
    app.delete('/customers/:c_id', function(req, res) {
        console.log('Inside DELETE /customers route');
        customer.deleteCustomer(req, res);
    });
    app.post('/products', function(req, res) {
        console.log('Inside POST /products route');
        product.postNewProduct(req, res);
    });
    app.get('/products', function(req, res) {
        console.log('Inside GET /products route');
        product.getAllProducts(req, res);
    });
    app.post('/orders', function(req, res) {
        console.log('Inside POST /orders route');
        order.newOrder(req, res);
    });
    app.get('/orders', function(req, res) {
        console.log('Inside GET /orders route');
        order.getAllOrders(req, res);
    });
}
