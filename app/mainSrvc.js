angular.module('devmtnTravel').service('mainSrvc', function($http) {
  this.getTravelInfo = function(){
      return $http.get('https://practiceapi.devmountain.com/api/travel/travel-info');
  };
  this.getPackageInfo = function(){
      return $http.get('https://practiceapi.devmountain.com/api/travel/package-info')
  }
});