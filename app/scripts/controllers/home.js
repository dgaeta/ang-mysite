'use strict';

/**
 * @ngdoc function
 * @name angMysiteApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angMysiteApp
 */
angular.module('angMysiteApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
