myApp.controller('CatsController', ['$scope', '$http', function($scope, $http) {
  $scope.data = {};

  function petFinder() {
    var key = '8c5651bb1f65ed3b8e5163969b917f60';

    var baseURL = 'http://api.petfinder.com/';
    var query1 = 'pet.getRandom';
    query1 += '?key=' + key;
    query1 += '&animal=cat';
    query1 += '&output=basic';
    query1 += '&format=json';

    var request1 = baseURL + encodeURI(query1) + '&callback=JSON_CALLBACK';
    console.log(request1);

    $http.jsonp(request1).then(
      function(response) {
        var resObj= response.data.petfinder.pet;
        var shelterId;
        console.log(resObj);
        $scope.catpicture = resObj.media.photos.photo[2].$t;
        $scope.catname = resObj.name.$t;
        $scope.catage = resObj.age.$t;
        $scope.catbreed = resObj.breeds.breed.$t;
        $scope.catsex = resObj.sex.$t;
        $scope.catdescription = resObj.description.$t;
        shelterId = resObj.shelterId.$t;

        console.log(shelterId);

        var query2 = 'shelter.get';
        query2 += '?key=' + key;
        query2 += '&id=' + shelterId;
        query2 += '&format=json';

        var request2 = baseURL + encodeURI(query2) + '&callback=JSON_CALLBACK';
        $http.jsonp(request2).then(
          function(response) {
            $scope.sheltername = response.data.petfinder.shelter.name.$t;
          });
      }
    );
  }

  petFinder();
}]);
