(function (){
  angular.module('app')
    .factory('TodoFactory', function () {
      var todos = ["dogs"];
      return {
        setData: function(data){
          todos = data;
        },
        getData: function(){
          return todos;
        }
      }
    });
})();
