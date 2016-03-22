var app = angular.module('nwApp',[]);

app.controller('ServicesController', function($scope, $http, $window){
	
	var refreshServices = function() {
		$http.get('/api/spa')
		.then(function(response) {
			return response.data;
		})
		.then(function(services) {
			$scope.services = services;
			$scope.displayError = false;
		})
		.catch(console.error.bind(console));
	};

	$scope.title = "Spa";
  //pass the service you want to delete
	$scope.delFunc = function(){
		var elemID = this.service._id;
		$http.delete('/api/spa/'+elemID)
		.then(function(){
			refreshServices();
		})
		.catch(console.error.bind(console));
	};

	$scope.prioritize = function(){
		var priority = this.service.priority;
		$http.get('/api/spa/action/prioritize')
		.then(function(services){
			$scope.services = services;
			refreshServices();
		})
		.catch(console.error.bind(console));
	};

	$scope.addService = function(){
		$http.post('/spa', $scope.newService)
		.then(function(res){
			$scope.postDataResponse=res.data;
			refreshServices();
		});
	};

	refreshServices();
});
