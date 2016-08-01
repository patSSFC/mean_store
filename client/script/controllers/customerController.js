meanStore.controller('CustomerController', function($scope, $location, $routeParams, customerFactory) {
    console.log('loaded CustomerController');

    var vm = this;

    vm.onCustSubmit = function() {
        console.log('on-submit');
        vm.error = false;
        customerFactory.newCustomer($scope.formData, function(data) {
            console.log(data.status);
            if(data.status === 500) {
                vm.error = true;
            }
            customerFactory.getAllCustomers(function(data) {
                if(data.status === 200) {
                    console.log(data.data);
                    vm.customers = data.data;
                } else {
                    console.log("weird error!");
                }
            })
        });
    }

    vm.onCustDelete = function() {
        var c_id = $routeParams.c_id;
        console.log(c_id);
    }

    customerFactory.getAllCustomers(function(data) {
        if(data.status === 200) {
            console.log(data.data);
            vm.customers = data.data;
        } else {
            console.log("weird error!");
        }
    })
});
