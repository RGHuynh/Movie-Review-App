(function(){
  var config = {
    templateUrl: '/app/components/search/search.component.html',
    controller: searchCtrl
  }

  function searchCtrl(searchService){
    var ctrl = this;
    ctrl.searchInput = '';
    ctrl.open = searchService.open;
  }

  angular
    .module('movieApp')
    .component('search', config)
})();