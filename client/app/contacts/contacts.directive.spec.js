'use strict';

describe('Directive: contacts', function () {

  // load the directive's module and view
  beforeEach(module('testApp'));
  beforeEach(module('app/contacts/contacts.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contacts></contacts>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the contacts directive');
  }));
});