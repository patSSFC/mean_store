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

    factory.deleteCustomer = function(c_id, callback) {
        $http.delete('/customers/' + c_id)
            .then(function(returnData) {
                console.log('Success in deletion!');
                callback(returnData);
            }, function(err) {
                console.log('error in deletion');
                console.log(err);
            })
    }

    return factory;
});
