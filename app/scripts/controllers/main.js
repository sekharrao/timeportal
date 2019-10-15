'use strict';

/**
 * @ngdoc function
 * @name displayTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the displayTimeApp
 */
angular.module('displayTimeApp')
  .controller('MainCtrl', function ($scope, $interval, $http) {
    $scope.serverTime = new Date().toLocaleTimeString();
	var baseUrl ='http://localhost:9050/time';
	var config = {
            headers: {Authorization:"S)N'/vXP/U?7@.\"]"}
        };
	$interval(function(){
		$http.get(baseUrl,config).then(function(response){
			$scope.serverTime = response.data.time;
			});
		
	},1000);
  });
