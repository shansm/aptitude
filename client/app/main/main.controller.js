'use strict';

angular.module('aptitudeApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.choice = null;
  	$scope.addQuestionFeedback = '';
  	/*$scope.questions = [];
    $scope.questions = [
    	{
    		question: "What advantage does a linked list provide over an array and vice versa. What are the disadvantages?",
    		type: "ds"
    	},
    	{
    		question: "What causes the worst run time complexity of quick sort occur and what is it?",
    		type: "algo"
    	},
    	{
    		question: "What are primitive types in JS? What can you tell me about them?",
    		type: "js"
    	},
    	{
    		question: "What are streams and piping in NodeJS?",
    		type: "node"
    	},
    	{
    		question: "What is the difference in copying by value vs. reference?",
    		type: "csfund"
    	}
    ];*/

    $scope.submit = function() {
    	$scope.questions.push($scope.addQuestion);
    	$scope.addQuestionFeedback = 'Question Successfully Added!';
    }

  });
