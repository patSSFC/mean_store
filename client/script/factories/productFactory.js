meanStore.factory('productFactory', function($http, $routeParams) {
    var factory = {};

    factory.postNewProduct = function(data) {
        $http.post('/products', data)
            .then(function(returnData) {
                console.log(returnData);
            }, function(err) {
                console.log(err);
            });
    };

    factory.getAllProducts = function(callback) {
        $http.get('/products')
            .then(function(returnData) {
                callback(returnData);
            }, function(err) {
                console.log(err);
            });
    }

    return factory;
});
