'use strict';

angular.module('aptitudeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/questions', {
        templateUrl: 'app/questions/questions.html',
        controller: 'MainCtrl'
      });
  });
