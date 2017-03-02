(function() {
    'use strict';

    angular
        .module('app.fizzbuzz')
        .factory('fizzBuzzService', fizzBuzzService);

    function fizzBuzzService() {
        return {
            getFizzBuzzResults: getFizzBuzzResults,
            getFizzBuzzResult: getFizzBuzzResult,
            isDivisibleByThree: isDivisibleByThree,
            isDivisibleByFive: isDivisibleByFive,
            isDivisibleByThreeAndFive: isDivisibleByThreeAndFive
        };
        function isDivisibleByThree(number) {
            return number % 3 === 0;
        }
        function isDivisibleByFive(number) {
            return number % 5 === 0;
        }
        function isDivisibleByThreeAndFive(number) {
            return isDivisibleByThree(number) && isDivisibleByFive(number);
        }
        function getFizzBuzzResult(number) {
            if (isDivisibleByThreeAndFive(number))
            {
                return number + ' FizzBuzz'
            } else if (isDivisibleByThree(number)) {
                return number + ' Fizz'
            } else if (isDivisibleByFive(number)) {
                return number + ' Buzz'
            }

            return number.toString();
        }
        function getFizzBuzzResults(number) {
            var results = [];
            var i;
            for (i = 1; i <= number; i++) {
                results[i - 1] = getFizzBuzzResult(i)
            }
            return results;
        }
    }
})();
