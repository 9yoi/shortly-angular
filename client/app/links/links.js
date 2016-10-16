angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};

  Links.getAll().then(function(links) { 
    $scope.data.links = links;
    data = $scope.data.links;
  }).catch(function (error) {
    console.error(error);
  });

  $scope.openLink = function (code) {
    Links.navLink(code)
    // then(function(resp) {
    //   console.log('resp in links controller', resp);

    // });
  };  

});