describe("Calculator", function () {
    var Calc;
    if (typeof require !== 'undefined') {
        var Calc = require('../src/Calculator');
    }
    var sut;

    beforeEach(function () {
        sut = typeof Calc === 'undefined' ? new Calculator() : new Calc();
    });

    describe("when newing up a Calculator", function () {
        it("should be defined", function () {
            expect(sut).toBeDefined();
        });

    });

    describe("when performing addition", function () {

        it("should get 7 when you add 5 and 2", function () {
            var actual = sut.add(5, 2)
            expect(actual).toEqual(7);
        });

        it("should get 0 when you add -1 and 1", function () {
            var actual = sut.add(5, 2)
            expect(actual).toEqual(7);
        });

        it("should get .1 when you add 0.1 and 0", function () {
            var actual = sut.add(.1, 0)
            expect(actual).toEqual(.1);
        });

        it("should get .30000000000003 when you add 0.10000000000001 and .20000000000002", function () {
            var actual = sut.add(0.10000000000001, .20000000000002);
            expect(actual).toEqual(.30000000000003);
        });
    });

    describe("when performing division", function () {

        it("should get 3 when you divide 9 by 3", function () {
            var actual = sut.div(9, 3)
            expect(actual).toEqual(3);
        });

        it("should get -1 when you divide -1 by 1", function () {
            var actual = sut.div(-1, 1)
            expect(actual).toEqual(-1);
        });

        it("should get 3.3333333333333335 when you divide 10 by 3", function () {
            var actual = sut.div(10, 3);
            expect(actual).toEqual(3.3333333333333335);
        });


        it("should get 0 when you divide 0 by 5", function () {
            var actual = sut.div(0, 5)
            expect(actual).toEqual(0);
        });

        it("should get 0 when you divide 5 by 0", function () {
            var actual = sut.div(5, 0)
            expect(actual).toEqual(0);
        });
    });


});
