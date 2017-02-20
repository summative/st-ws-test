angular.module('pairs', [])
.controller('pairData', function($scope, $http) {

$scope.rates = [];  

 



$scope.getPairs = function(value){
       $http.get('http://api.fixer.io/latest?base=USD&symbols='+ $scope.c1 +','+$scope.c2).
                then(function(response) {
                    $scope.returnedData = response.data;

                });
}

        
        

 
});

