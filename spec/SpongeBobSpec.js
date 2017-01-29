describe("SpongeBob", function(){
    var sBob;
    if(typeof require !== 'undefined')
    {
        sBob = require('../src/api/SpongeBob');
    }
    var sut;

    beforeEach(function(){
        sut = typeof sBob === 'undefined' ? spongeBob : sBob;
    });

    it('During initialization', function(){
         expect(sut).toBeDefined();
    });

    it('name is squarePants', function(){
        expect(sut.name).toBe('squarePants');
    })

    it('when spongeBob apologizes, spongeBob is returned', function(){
        var ret = sut.apologize();
        expect(ret).toBe(sut);
    })
})