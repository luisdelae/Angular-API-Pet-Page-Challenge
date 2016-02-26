var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController'
    })
    .when('/dogs', {
      templateUrl: '/views/templates/dogs.html',
      controller: 'DogsController'
    })
    .when('/shelters', {
      templateUrl: '/views/templates/shelters.html',
      controller: 'SheltersController'
    })
    // .when('/bunnies', {
    //   templateUrl: '/views/templates/bunnies.html',
    //   controller: 'BunniesController'
    // })
    .otherwise({
      redirectTo: 'home'
    });
}]);
