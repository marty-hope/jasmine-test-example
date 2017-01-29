describe("ArrayJs", function () {
    var ArrJs;
    if (typeof require !== 'undefined') {
        ArrJs = require('../src/api/ArrayJs');
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
    describe("when adding an item to ArrayJs", function () {
        it("it should  contain 1 item", function () {
            sut.add("test");
            expect(sut.ar.length).toBe(1);
        });

    });

     describe("when executing getFirstItem in ArrayJs", function () {
        it("the first item in the array should be returned", function () {
            sut.add("test");
            sut.add("this");
            sut.add("stuff");
            expect(sut.getFirstItem()).toBe("test");
        });

    });
});