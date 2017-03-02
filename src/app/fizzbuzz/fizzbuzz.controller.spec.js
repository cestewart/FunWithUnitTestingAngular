describe('fizz buzz controller', function() {
    var scope = {};
    var controller;

    beforeEach(module('ui.router'));
    beforeEach(module('app.fizzbuzz'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('fizzBuzzController', {$scope:scope});
    }));

    it('title should be set', function() {
        expect(controller.title).toBe('Fizz Buzz');
        expect(controller.results.length).toBe(100);
    });
});