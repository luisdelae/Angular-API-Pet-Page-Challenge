myApp.controller('SheltersController', ['$scope', '$http', function($scope, $http) {
  $scope.data = {};

  $scope.shelterFinder = function() {

    var zipcode = $scope.zipcode;

    var key = '8c5651bb1f65ed3b8e5163969b917f60';


    var baseURL = 'http://api.petfinder.com/';
    var query = 'shelter.find';
    query += '?key=' + key;
    query += '&location=' + zipcode;
    query += '&count=10';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(
      function(response) {
        var sheltersArray = [];

        $scope.sheltersArray = response.data.petfinder.shelters.shelter;

      }
    );
  };

}]);
