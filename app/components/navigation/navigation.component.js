(function(){
  var config = {
    templateUrl: '/app/components/navigation/navigation.component.html',
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