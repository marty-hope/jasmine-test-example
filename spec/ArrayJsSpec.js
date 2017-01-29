describe("ArrayJs", function () {
    var ArrJs;
    if (typeof require !== 'undefined') {
        ArrJs = require('../src/ArrayJs');
    }
    var sut;

    beforeEach(function () {
        sut = typeof ArrJs === 'undefined' ? new ArrayJs() : new ArrJs();
    });

    describe("when newing up an Arrayjs", function () {
        it("should be defined", function () {
            expect(sut).toBeDefined();
        });

    });
        
    describe("when newing up an Arrayjs", function () {
        it("ar array property should be empty", function () {
            expect(sut.ar).toBeDefined();
        });

    });
});