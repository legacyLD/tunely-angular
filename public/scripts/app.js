angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

  var baseUrl = 'http://localhost:3000';

  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController (  $http  ) {
  var vm = this;
  vm.results = null;

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(resSuccess, resError);

  function resSuccess(res) {
    console.log("resSuccess:", res);
    vm.albums = res.data;
  }

  function resError(res) {
    console.log("error:" + res);
  }
}
