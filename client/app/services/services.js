angular.module('shortly.services', [])

// app.get('/api/links/', linksController.allLinks);

.factory('Links', function ($http) {
  // fetch from db
  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    }).then(function(resp) {
      return resp.data;
    });
  };
  // post to db
  var addOne = function (link) {
    console.log('running addone in service');
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    }).then(function(resp) {
      console.log('resp in addOne', resp);
      return resp;
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
    console.log('attempting signin');
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      console.log('sign in promise success');
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
