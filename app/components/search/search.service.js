(function(){
  angular
    .module('movieApp')
    .factory('searchService', searchService)

    function searchService($uibModal){
      var service = {
        open: open
      };
      return service;

      function open() {
        $uibModal.open({
          template: '<result />'
        });
      } 

    };
})();