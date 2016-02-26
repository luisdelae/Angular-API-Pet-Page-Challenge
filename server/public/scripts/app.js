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
    .when('/cats', {
      templateUrl: '/views/templates/cats.html',
      controller: 'CatsController'
    })
    .when('/reptiles', {
      templateUrl: '/views/templates/reptiles.html',
      controller: 'ReptilesController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
