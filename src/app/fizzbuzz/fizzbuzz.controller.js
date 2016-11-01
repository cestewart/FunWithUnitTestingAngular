(function() {
    'use strict';

    angular
        .module('app.fizzbuzz')
        .controller('fizzBuzzController', fizzBuzzController);

    fizzBuzzController.$inject = ['fizzBuzzService'];
    function fizzBuzzController(fizzBuzzService) {
        var vm = this;
        vm.title = 'Fizz Buzz';
    }
})();
