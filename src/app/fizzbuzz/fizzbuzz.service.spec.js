describe('fizz buzz service', function() {
    var fizzBuzzService;

    beforeEach(module('ui.router'));
    beforeEach(module('app.fizzbuzz'));
    beforeEach(inject(function(_fizzBuzzService_) {
        fizzBuzzService = _fizzBuzzService_;
    }));

    it('should return true from isDivisibleByThree', function() {
        expect(fizzBuzzService.isDivisibleByThree(3)).toBe(true);
        expect(fizzBuzzService.isDivisibleByThree(6)).toBe(true);
        expect(fizzBuzzService.isDivisibleByThree(15)).toBe(true);
    });

    it('should return false from isDivisibleByThree', function() {
        expect(fizzBuzzService.isDivisibleByThree(4)).toBe(false);
    });

    it('should return true from isDivisibleByFive', function() {
        expect(fizzBuzzService.isDivisibleByFive(5)).toBe(true);
        expect(fizzBuzzService.isDivisibleByFive(10)).toBe(true);
        expect(fizzBuzzService.isDivisibleByFive(25)).toBe(true);
    });

    it('should return false from isDivisibleByFive', function() {
        expect(fizzBuzzService.isDivisibleByFive(4)).toBe(false);
    });
});
