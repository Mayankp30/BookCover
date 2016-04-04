/**
 * Angular Module created with controller and injected Angular's $scope and $http.
 */
angular.module('bookCoverApp', [])
	.controller('bookCoverAppController', ['$http', '$scope', function($http, $scope) {
		var vm = this;
		vm.fetchData = fetchData;

		/**
		 * select option values
		 */
		$scope.options = [{
			name: 'Medical Book: Clinical Skills',
			value: '1'
		}, {
			name: 'CS: Complex Cases',
			value: '2'
		}];

		/**
		 * fetch data from the server
		 */
		function fetchData(data) {
			$http.get('/' + data)
			.then(function(response) {
				vm.response = response;
				vm.title = vm.response.data.title;
				vm.url = vm.response.data.url;
				vm.subtitle = vm.response.data.subtitle;
				vm.points = vm.response.data.points;
				vm.edition = vm.response.data.edition;
			});

		}

	}]);