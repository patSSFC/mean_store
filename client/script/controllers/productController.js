meanStore.controller('ProductController', function($scope, $location, productFactory) {
    console.log('loaded ProductController');
    console.log(productFactory);

    var vm = this;

    vm.onProductSubmit = function() {
        vm.errorSubmit = false;
        productFactory.postNewProduct($scope.formData);
        getAllHelper();
    }

    getAllHelper();
    function getAllHelper() {
        productFactory.getAllProducts(function(data) {
            if(data.status === 200) {
                console.log(data.data);
                vm.products = data.data;
            } else {
                console.log("weird error!");
            }
        })
    }
})
