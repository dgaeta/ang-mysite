'use strict';

/**
 * @ngdoc function
 * @name angMysiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angMysiteApp
 */
angular.module('angMysiteApp')
  .controller('FavstuffCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
