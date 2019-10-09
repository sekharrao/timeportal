'use strict';
angular.module('displayTimeApp')
	.service('TimeService',function($http,$q){
		var baseUrl ='data/response.json';
		function getData(){
			$http.get(baseUrl).then(handleSuccess, handleFailure);
		};
		
				// ---
		// PRIVATE METHODS.
		// ---

		function handleSuccess(response) {
			return (response.data);
		}

		function handleFailure(response) {
			if (!angular.isObject(response.data) ||
				!response.data.message
			) {
				return ($q.reject('An unknown error occurred.'));
			}
			// Otherwise, use expected error message.
			return ($q.reject(response.data.message));
		}
		
		// Return public API.
		return({
			getData : getData
		});
	});