'use strict';

/**
 * 
 */

angular.module('displayTimeApp').service('MyService', function($http, $log) {
	var baseUrl = 'http://localhost:9050/time';
	var config = {

		Authorization : "S)N'/vXP/U?7@.\"]"

	};

	function fetchValue() {
		var request = $http({
			method : 'get',
			url : baseUrl,
			headers : config
		});

		return (request.then(success, failure));
	}

	function success(response) {
		$log.debug("from service: " + response.data.time);
		return (response.data);
	}

	function failure(response) {
		return response.data;
	}

	return {
		fetchData : fetchValue
	};
});