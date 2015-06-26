'use strict';

angular.module('aptitudeApp')
  .factory('questions', function () {
    // Service logic
    // ...

    var questions = {
      1: {
        question: 'What advantage does a linked list provide over an array and vice versa. What are the disadvantages?',
        type: ['Data Structure'],
        comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 1
      },
      2: {
        question: 'Inserting an element into an array: what is the time complexity for inserting in the middle and end?',
        type: ['Data Structure'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 2
      },
      3: {
        question: 'What causes the worst run time complexity of quick sort occur and what is it?',
        type: ['Algorithm'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 3
      },
      4: {
        question: 'What are primitive types in JS? What can you tell me about them?',
        type: ['JS'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 4
      },
      5: {
        question: 'What are streams and piping in NodeJS?',
        type: ['Node'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 5
      },
      6: {
        question: 'What is the difference in copying by value vs. reference?',
        type: ['CS-fundamentals'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 6
      },
      7: {
        question: 'Where do you see yourself in 5 years?',
        type: ['General'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 7
      },
      8: {
        question: 'Explain to me how inheritance works in JS',
        type: ['JS'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 8
      },
      9: {
        question: 'If you could master one technology this year, what would it be?',
        type: ['General'],
        author: 'Sam Walton',
        authorEmail: 'walton@walmart.com',
        photo: 'walton.jpg',
        active: true,
        complexity: 'Hard',
                comments: [{
          comment: 'Good Question',
          photo: 'bigbird.png',
          author: 'Big Bird'},
          {
          comment: 'Lousy Question!',
          photo: 'oscar.png',
          author: 'Oscar the Grouch'}],
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lacus consequat, rutrum tortor ac, rutrum nisi. Ut ullamcorper egestas ante',
        id: 9
      }
    };

    // Public API here
    return {
      getQuestions: function () {
        return questions;
      },
      getSpecificQuestion: function (num) {
        return questions[num]
      }
    };
  });
