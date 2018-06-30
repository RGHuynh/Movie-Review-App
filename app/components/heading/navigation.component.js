(function(){
  var config = {
    templateUrl: '/app/components/heading/navigation.component.html',
    controller: navigationCtrl
  };

  navigationCtrl.$inject = ['$scope'];

  function navigationCtrl($scope){
    $scope.hello = "hello world"
  };

  angular
    .module('movieApp')
    .component('navigation', config)
})();