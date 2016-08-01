meanStore.factory('customerFactory', function($http, $routeParams) {
    var factory = {};

    factory.newCustomer = function(data, callback) {
        $http.post('/customers', data)
        .then(function(returnData) {
            console.log('Success!');
            callback(returnData);
        }, function(err) {
            console.log('Error!');
            callback(err);
        })
    }

    factory.getAllCustomers = function(callback) {
        $http.get('/customers')
        .then(function(returnData) {
            console.log('Success!');
            callback(returnData);
        }, function(err) {
            console.log('Error!');
            callback(err);
        })
    }

    return factory;
});
