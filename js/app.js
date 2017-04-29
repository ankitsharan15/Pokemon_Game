'use strict';

var memoryGameApp = angular.module('memoryGameApp', []);

memoryGameApp.factory('game', function() {
  var tileNames = ['pikachu', 'burbasor', 'evee', 'Togepi_banner', 'giggly', 'squatle',
    'charmender', 'ghost_gastly'];

  return new Game(tileNames);
});

memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});

memoryGameApp.directive('mgCard', function() {
  return {
    restrict: 'E',
    template: '<div class="container">' +
                '<div class="card" ng-class="{flipped: tile.flipped}">' +
                  '<img class="front" ng-src="img/back.png">' +
                  '<img class="back" ng-src="img/{{tile.title}}.png">' +
                '</div>' +
              '</div>',
    scope: {
      tile: '='
    }
  }
});