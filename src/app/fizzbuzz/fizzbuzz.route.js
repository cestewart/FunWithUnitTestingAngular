(function() {
    'use strict';

    angular.module('app.fizzbuzz')
        .config(function($stateProvider) {
        $stateProvider
            .state('fizzbuzz', {
                url: '/fizzbuzz',
                templateUrl: 'app/fizzbuzz/fizzbuzz.html',
                controller: 'fizzBuzzController',
                controllerAs: 'vm'
            })
    })
})();
