(function() {
    'use strict';

    angular
        .module('app.fizzbuzz')
        .factory('fizzBuzzService', fizzBuzzService);

    function fizzBuzzService() {
        return {
            isDivisibleByThree: isDivisibleByThree,
            isDivisibleByFive: isDivisibleByFive
        };
        function isDivisibleByThree(number) {
            return number % 3 === 0;
        }
        function isDivisibleByFive(number) {
            return number % 5 === 0;
        }
    }
})();
