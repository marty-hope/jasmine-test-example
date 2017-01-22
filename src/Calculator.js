function Calculator() {
}
Calculator.prototype.add = function(a, b) {
    return a + b;
};

Calculator.prototype.div = function(a, b) {
    if( b === 0 ) return 0;
    return a / b;
};
if(typeof module !== 'undefined')
{
    module.exports = Calculator;
}
