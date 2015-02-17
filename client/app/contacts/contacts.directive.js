'use strict';

angular.module('testApp')
  .directive('contacts', function () {
    return {
      templateUrl: 'app/contacts/contacts.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
 
      }
    };
  });