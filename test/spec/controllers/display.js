'use strict';

describe('Controller: DisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('atompyApp'));

  var DisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DisplayCtrl = $controller('DisplayCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DisplayCtrl.awesomeThings.length).toBe(3);
  });
});
