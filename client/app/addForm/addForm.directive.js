'use strict';

angular.module('testApp')
  .directive('addForm', function () {
    return {
      templateUrl: 'app/addForm/addForm.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });