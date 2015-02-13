'use strict';

angular.module('testApp')
  .directive('contacts', function () {
    return {
      templateUrl: 'app/contacts/contacts.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });