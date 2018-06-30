(function(){
  var config = {
    templateUrl: '/app/components/heading/navigation.component.html',
    controller: navigationCtrl
  };

  function navigationCtrl(){
    var ctrl = this;
    ctrl.hello = 'hello world'
  };

  angular
    .module('movieApp')
    .component('navigation', config)
})();