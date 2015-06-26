'use strict';

angular.module('aptitudeApp')
  .controller('MainCtrl', function ($scope, $http, questions, $routeParams) {
  	$scope.choice = null;
  	$scope.addQuestionFeedback = '';
  	$scope.allQuestions = questions.getQuestions();
    $scope.specificQuestion = questions.getSpecificQuestion($routeParams.id);
    $scope.submit = function() {
    	$scope.questions.push($scope.addQuestion);
    	$scope.addQuestionFeedback = 'Question Successfully Added!';
    	$scope.addQuestion = {};
    }

  });
