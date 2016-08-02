meanStore.factory('orderFactory', function($http, $routeParams) {
    var factory = {};

    factory.newOrder = function(data) {
        console.log(data);
        $http.post('/orders', data)
            .then(function(returnData) {
                console.log(returnData);
            }, function(err) {
                console.log(err);
            });
    }

    factory.getAllOrders = function(callback) {
        $http.get('/orders')
            .then(function(returnData) {
                console.log(returnData);
                callback(returnData);
            }, function(err) {
                console.log(err);
            })
    }

    return factory;
});
