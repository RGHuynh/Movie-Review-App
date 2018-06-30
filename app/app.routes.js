(function(){
  angular
  .module('movieApp')
  .config(['$routeProvider' , function ($routeProvider){
    $routeProvider
      .when('/', {
        template: '<homepage />'
      })
  }]);
})();