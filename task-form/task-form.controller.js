(function(){
  angular.module('app')
    .controller('TaskFormCtrl', function(TodoFactory){
      var $ctrl = this;
      $ctrl.listItems = TodoFactory.getData();
      $ctrl.newToDo = function () {
        if ($ctrl.toDo) {
          $ctrl.listItems.push($ctrl.toDo);
          TodoFactory.setData($ctrl.listItems);
        }
        $ctrl.toDo = '';
      };
      $ctrl.onKeyDown = function (event) {
        if (event.key === 'Enter') {
          $ctrl.newToDo();
        }
      };
    });
})();
