(function() {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.fizzbuzz'
    ])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/fizzbuzz');
    })
})();
