'use strict';
var app = angular.module('catalogApp', ['ui.router']);


    app.config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: '/home.html',
              controller: 'MainCtrl',
                resolve: {
                    itemPromise: ['items', function(items){
                        return items.getAll();
                    }]
                }
            })
            .state('items', {
              url: '/items/{id}',
              templateUrl: '/items.html',
              controller: 'ItemsCtrl',
                resolve: {
                    item: ['$stateParams', 'items', function($stateParams, items) {
                        return items.get($stateParams.id);
                    }]
                }
            });

        $urlRouterProvider.otherwise('home');
      }]);



