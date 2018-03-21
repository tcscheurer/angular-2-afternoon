angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc){
    mainSrvc.getPackageInfo().then(response=>{
        $scope.allPackages = response.data;
        if($stateParams.id){
            $scope.packIndex = $scope.allPackages.findIndex( function(pack){
                return pack.id === parseInt( $stateParams.id);
            });
            if($scope.packIndex !== -1){
                $scope.package = $scope.allPackages[$scope.packIndex];
            }
        }
    });
});