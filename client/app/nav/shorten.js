angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.link.url = '';
  $scope.addLink = function () {
    console.log('scopelink should be apple :', $scope.link);
    Links.addOne($scope.link)
    .then(function(resp) {
      console.log(resp);
      $location.path('/links');
    }).catch(function (error) {
      console.error(error);
    });
  };

});
