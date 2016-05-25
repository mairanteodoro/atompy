'use strict';

describe('Controller: FetchCtrl', function () {

  // load the controller's module
  beforeEach(module('atompyApp'));

  var FetchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FetchCtrl = $controller('FetchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FetchCtrl.awesomeThings.length).toBe(3);
  });
});
