angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];
function AlbumsShowController (  $http,   $routeParams  ) {
   var vm = this;
   var id = $routeParams.id;

   $http({
     method: 'GET',
     url: '/api/albums/'+ id
   }).then(function successCallback(json) {
     vm.album = json.data;
   });
 }
