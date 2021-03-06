define([], function() {

    function workOrderController($scope, authenticateUser, $sessionStorage, $location, appConstants, $http, $location, $cookies, workOrderCache) {

        authenticateUser.redirectToLoginIfUnauthenticated();

        $scope.workOrderNumber = "";

        $scope.workOrderList = [];

        $scope.getWorkOrderList = function(){
            $scope.workOrderList = [];
            $http.get(appConstants.getWorkOrderList, authenticateUser.getHeaderObject()).then(function(response) {
                $scope.workOrderList = response.data;
            });
        }

        $scope.getWorkOrderList();

        $scope.searchWorkOrder = function() {      
            $http.get(appConstants.getWorkOrder + "work_order_num=" + $scope.workOrderNumber, authenticateUser.getHeaderObject()).then(function(response) {
                var workOrderData = response.data;
                $sessionStorage.cachedWorkOrder = response.data;
                if(workOrderData.length > 0) {
                    workOrderCache.saveWorkOrderDetails(workOrderData[0]);
                    $location.path("description");                    
                } else {
                    alert("No Data exists for selected Work Order Number")
                }
            });
        }

        $scope.createWorkOrder = function() {
            $location.path("createworkorder");
        }

    }

    return workOrderController;
})