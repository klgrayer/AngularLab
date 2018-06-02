(function(){
  angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/app', {
        template: '<task-form></task-form>'
      })
      .otherwise({
        // redirectTo: '/'
        template:'<not-found></not-found>'
      });
  });
})();
