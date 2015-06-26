'use strict';

angular.module('aptitudeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.questions = {
    	_1 : {
    		question: "What advantage does a linked list provide over an array and vice versa. What are the disadvantages?"
    		type: "ds"
    	},
    	_2 : {
    		question: "What causes the worst run time complexity of quick sort occur and what is it?"
    		type: "algo"
    	},
    	_3 : {
    		question: "What are primitive types in JS? What can you tell me about them?"
    		type: "js"
    	}
    	_4 : {
    		question: "What are streams and piping in NodeJS?"
    		type: "node"
    	},
    	_5 : {
    		question: "What is the difference in copying by value vs. reference?"
    		type: "csfund"
    	}
    }
  });
