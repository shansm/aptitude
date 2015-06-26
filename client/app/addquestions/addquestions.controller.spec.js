'use strict';

describe('Controller: AddquestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('aptitudeApp'));

  var AddquestionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddquestionsCtrl = $controller('AddquestionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
