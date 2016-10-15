angular.module('shortly.services', [])

// app.get('/api/links/', linksController.allLinks);


.factory('Links', function ($http) {
  // fetch from db
  var getAll = function () {
    return $http.get('api/links');
    // .then(function(resp) {
    //   console.log('resp.data', resp.data);
    //   return resp.data;
    // }, function(err) {
    //   console.error(err);
    // });
  };
  // post to db
  var addOne = function (link) {
    return $http({
      method: 'POST',
      url: 'api/links',
      data: link
    }).then(function(resp) {
      console.log('response in addone post', resp);
    });
  };

  return {
    addOne: addOne,
    getAll: getAll 
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
