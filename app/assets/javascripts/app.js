'use strict';
var app = angular.module('catalogApp', ['ui.router', 'templates', 'ui.bootstrap']);


app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'home/_home.html',
              controller: 'MainCtrl',
                resolve: {
                    itemPromise: ['items', function(items){
                        return items.getAll();
                    }]
                }
            })
            .state('items', {
              url: '/items/{id}',
              templateUrl: 'items/_items.html',
              controller: 'ItemsCtrl',
                resolve: {
                    item: ['$stateParams', 'items', function($stateParams, items) {
                        return items.get($stateParams.id);
                    }]
                }
            });

        $urlRouterProvider.otherwise('home');
      }]);
