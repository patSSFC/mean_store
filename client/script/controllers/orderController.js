meanStore.controller('OrderController', function($scope, $location, customerFactory, orderFactory, productFactory) {
    console.log('loaded OrderController');
    console.log(orderFactory);

    var vm = this;

    getCustomers();
    getProducts();
    getAllHelper();
    function getCustomers() {
        customerFactory.getAllCustomers(function(data) {
            console.log("customers " + data);
            vm.customers = data.data;
        });
    }

    // getProducts();
    // getAllHelper();
    function getProducts() {
        productFactory.getAllProducts(function(data) {
            console.log("products " + data);
            vm.products = data.data;
        })
    }

    vm.onOrderSubmit = function() {
        console.log($scope.formData);
        orderFactory.newOrder($scope.formData);
        getAllHelper();
    }

    // getAllHelper();
    function getAllHelper() {
        orderFactory.getAllOrders(function(data) {
            console.log(data);
            vm.orders = data.data;
        })
    }
})
