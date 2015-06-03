var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	$scope.users = mainService.getUsers().then(function(response) {
  		$scope.users = response.data.data;
  	});
  }


  $scope.getUsers();

});