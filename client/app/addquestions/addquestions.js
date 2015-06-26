'use strict';

angular.module('aptitudeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addquestions', {
        templateUrl: 'app/addquestions/addquestions.html',
        controller: 'MainCtrl'
      });
  });
