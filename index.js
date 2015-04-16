angular.module('app', [])
.controller('ctrl', function ($scope, $http) {
  $scope.greet = "World";

  $scope.getData = function () {
    var endpoint = 'api/app';
    $http.get(endpoint).success(function(data) {
      $scope.name = data[0].name;
    });
  };
});
