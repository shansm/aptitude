'use strict';

angular.module('aptitudeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/question-detail/:id', {
        templateUrl: 'app/main/question-detail.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
