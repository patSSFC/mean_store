meanStore.controller('CustomerController', function($scope, $location, $routeParams, customerFactory) {
    console.log('loaded CustomerController');

    var vm = this;

    vm.onCustSubmit = function() {
        console.log('on-submit');
        vm.error = false;
        customerFactory.newCustomer($scope.formData, function(data) {
            if(data.status === 500) {
                vm.error = true;
            }
            getAllHelper();
        });
    }

    vm.onCustDelete = function(cust_id) {
        var c_id = cust_id;
        customerFactory.deleteCustomer(c_id, function(data) {
            getAllHelper();
        });
    }

    getAllHelper();
    function getAllHelper() {
        customerFactory.getAllCustomers(function(data) {
            if(data.status === 200) {
                console.log(data.data);
                vm.customers = data.data;
            } else {
                console.log("weird error!");
            }
        })
    }

    // getAllHelper();

    // customerFactory.getAllCustomers(function(data) {
    //     if(data.status === 200) {
    //         console.log(data.data);
    //         vm.customers = data.data;
    //     } else {
    //         console.log("weird error!");
    //     }
    // })
});
