angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};

  Links.getAll().then(function(links) { 
    $scope.data.links = links;
    data = $scope.data.links
  }).then(function parseLinks() {
    // extrac link information such as title, png, url, code,
    scope.data
    code


  }).catch(function (error) {
    console.error(error);
  });

});