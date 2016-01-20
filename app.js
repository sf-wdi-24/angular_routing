app = angular.module('sampleApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'AboutCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider
		.html5Mode({
			enabled: true,
			requireBase: false
		});

}]);

app.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.homeCtrlTest = "HomeCtrl is working!";
}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {
	$scope.aboutCtrlTest = "AboutCtrl is working!";
}]);