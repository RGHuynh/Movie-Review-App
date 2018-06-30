(function(){
  var config = {
    templateUrl: '/app/components/search/search.component.html',
    controller: searchCtrl
  }

  function searchCtrl(){
    var ctrl = this;
    ctrl.searchInput = ''
  }

  angular
    .module('movieApp')
    .component('search', config)
})();