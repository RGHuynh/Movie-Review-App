(function(){
  var config = {
    templateUrl: '/app/components/result/result.component.html',
    controller: resultCtrl
  }

  function resultCtrl(){
    var ctrl = this;
    ctrl.test = 'hellow result';
  }

  angular
    .module('movieApp')
    .component('result', config)
})();