angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  var linkData = Links.getAll().then(function(response) {
    $scope.data = response;
  }, function (err) {
    console.log(err);
  });

  console.log('CONTROLLER IN LINKS', $scope.data);
});