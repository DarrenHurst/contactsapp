'use strict';

describe('Service: googleV3contacts', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var googleV3contacts;
  beforeEach(inject(function (_googleV3contacts_) {
    googleV3contacts = _googleV3contacts_;
  }));

  it('should do something', function () {
    expect(!!googleV3contacts).toBe(true);
  });

});
