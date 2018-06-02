(function () {
  angular.module('app')
    .controller('TaskListCtrl', function (TodoFactory){
      var $ctrl = this;
      $ctrl.removeToDo = function (index) {
        $ctrl.list.splice(index, 1);
        TodoFactory.setData($ctrl.list);
      }
    });
})();
