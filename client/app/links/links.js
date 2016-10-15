angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};

  Links.getAll().then(function(links) { 
    console.log('links in getAll', links);
    $scope.data.links = links;
  }).catch(function (error) {
    console.error(error);
  });

});