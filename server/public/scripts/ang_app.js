var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
  $scope.data = {};

  function petFinder() {
    // API key
    var key = '8c5651bb1f65ed3b8e5163969b917f60';

    var baseURL = 'http://api.petfinder.com/';
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        $scope.animal = response.data.petfinder.pet;
        console.log($scope.animal);
      }
    );
  }

  petFinder();
}]);
