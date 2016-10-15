angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function (link) {
    Links.addOne(link).then(function(url) {
      $scope.link = url;
    }).catch(function (error) {
      console.error(error);
    });
  };

});
