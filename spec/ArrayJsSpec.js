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

    describe("when executing addToArray in ArrayJs", function () {
        it("the items are added to the array", function () {
            sut.addToArray(["test", "this", "stuff"]);
            expect(sut.ar.length).toBe(3);
        });

    });
     describe("when executing getLastItem in ArrayJs", function () {
        it("the last item in the array should be returned", function () {
            sut.add("test");
            sut.add("this");
            sut.add("stuff");
            expect(sut.GetLastItem()).toBe("stuff");
        });

    });
    describe("when executing addToArray in ArrayJs with no parameters", function () {
        it("the internal arr should be empty", function () {
            sut.addToArray();
            expect(sut.ar.length).toBe(0);
        });

    });
});