'use strict';

describe('Directive: addForm', function () {

  // load the directive's module and view
  beforeEach(module('testApp'));
  beforeEach(module('app/addForm/addForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-form></add-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the addForm directive');
  }));
});