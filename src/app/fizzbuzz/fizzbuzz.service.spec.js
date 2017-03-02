describe('fizz buzz service', function() {
    describe('isDivisibleByThree', function () {
        var fizzBuzzService;

        beforeEach(module('ui.router'));
        beforeEach(module('app.fizzbuzz'));
        beforeEach(inject(function (_fizzBuzzService_) {
            fizzBuzzService = _fizzBuzzService_;
        }));

        it('should return true', function () {
            expect(fizzBuzzService.isDivisibleByThree(3)).toBe(true);
            expect(fizzBuzzService.isDivisibleByThree(6)).toBe(true);
            expect(fizzBuzzService.isDivisibleByThree(15)).toBe(true);
        });

        it('should return false', function () {
            expect(fizzBuzzService.isDivisibleByThree(4)).toBe(false);
        });
    });

    describe('isDivisibleByFive', function () {
        var fizzBuzzService;

        beforeEach(module('ui.router'));
        beforeEach(module('app.fizzbuzz'));
        beforeEach(inject(function (_fizzBuzzService_) {
            fizzBuzzService = _fizzBuzzService_;
        }));

        it('should return true', function () {
            expect(fizzBuzzService.isDivisibleByFive(5)).toBe(true);
            expect(fizzBuzzService.isDivisibleByFive(10)).toBe(true);
            expect(fizzBuzzService.isDivisibleByFive(25)).toBe(true);
        });


        it('should return false', function () {
            expect(fizzBuzzService.isDivisibleByFive(4)).toBe(false);
        });
    });


    describe('isDivisibleByThreeAndFive', function () {
        var fizzBuzzService;

        beforeEach(module('ui.router'));
        beforeEach(module('app.fizzbuzz'));
        beforeEach(inject(function (_fizzBuzzService_) {
            fizzBuzzService = _fizzBuzzService_;
        }));

        it('should return true', function () {
            expect(fizzBuzzService.isDivisibleByFive(15)).toBe(true);
            expect(fizzBuzzService.isDivisibleByFive(45)).toBe(true);
        });


        it('should return false', function () {
            expect(fizzBuzzService.isDivisibleByFive(14)).toBe(false);
        });
    });

    describe('getFizzBuzzResult', function () {
        var fizzBuzzService;

        beforeEach(module('ui.router'));
        beforeEach(module('app.fizzbuzz'));
        beforeEach(inject(function (_fizzBuzzService_) {
            fizzBuzzService = _fizzBuzzService_;
        }));

        it('should return string', function () {
            expect(fizzBuzzService.getFizzBuzzResult(15)).toBe('15 FizzBuzz');
            expect(fizzBuzzService.getFizzBuzzResult(45)).toBe('45 FizzBuzz');
            expect(fizzBuzzService.getFizzBuzzResult(5)).toBe('5 Buzz');
            expect(fizzBuzzService.getFizzBuzzResult(3)).toBe('3 Fizz');
        });

        it('should return string', function () {
            expect(fizzBuzzService.getFizzBuzzResult(14)).toBe('14');
            expect(fizzBuzzService.getFizzBuzzResult(2)).toBe('2');
        });
    });

    describe('getFizzBuzzResults', function () {
        var fizzBuzzService;

        beforeEach(module('ui.router'));
        beforeEach(module('app.fizzbuzz'));
        beforeEach(inject(function (_fizzBuzzService_) {
            fizzBuzzService = _fizzBuzzService_;
        }));

        it('should return array or strings', function () {
            expect(fizzBuzzService.getFizzBuzzResults(15).length).toBe(15);
        });
    });
});
