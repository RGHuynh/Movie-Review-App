(function(){
  var config = {
    templateUrl: '/app/components/contact/contact.component.html',
    controller: contactCtrl
  }

  function contactCtrl(){

  }
  
  angular
    .module('movieApp')
    .component('contact', config)
})();