angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

  var baseUrl = 'http://localhost:3000';

  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController (  $http  ) {
  var vm = this;
  vm.results = null;
  // vm.newAlbum = {
  //     name: 'License to Ill',
  //     artistName: 'Beastie Boys'
  // };

  // vm.albums = [
  // ];

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

  $http({
    method: 'POST',
    url: '/api/albums'
    data: {

    }
  }).then(resSuccess, resError);

  function resSuccess(res) {
    console.log("resSuccess:", res);
    vm.albums = res.data;
  }

  function resError(res) {
    console.log("error:" + res);
  }
}
