'use strict';

/**
 * @ngdoc function
 * @name displayTimeApp.controller:MainCtrl
 * @description # MainCtrl Controller of the displayTimeApp
 */
angular.module('displayTimeApp').controller('MainCtrl',
		function($scope, $interval, $log, MyService) {
			$scope.serverTime = new Date().toLocaleTimeString();
			
			//private method
			function data() {
				MyService.fetchData().then(function(data) {
					$log.debug(data);
					$scope.serverTime = data.time;
				});
			}			
			 
			$interval(data, 1000);
		});
