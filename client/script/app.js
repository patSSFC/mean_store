var meanStore = angular.module('meanStore', ['ngRoute']);

meanStore.config(function($routeProvider) {
    $routeProvider
    .when('/customers', {
        templateUrl: '../partials/customer-view.html',
        controller: 'CustomerController',
        controllerAs : 'cc'
    })
    .when('/orders', {
        templateUrl: '../partials/order-view.html',
        controller: 'OrderController',
        controllerAs: 'oc'
    })
    .when('/products', {
        templateUrl: '../partials/product-view.html',
        controller: 'ProductController',
        controllerAs: 'pc'
    })
    // .when('/customers/:c_id', {
    //     templateUrl: '../partials/customer-view.html',
    //     controller: 'CustomerController',
    //     controllerAs : 'cc'
    // })
    .otherwise({
        redirectTo: '/index.html'
    })
});
