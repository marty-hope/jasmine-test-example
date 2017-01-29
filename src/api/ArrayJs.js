function ArrayJs(){
    this.ar = [];
};

ArrayJs.prototype.add = function (val){
    this.ar.push(val);
};

ArrayJs.prototype.getFirstItem = function()
{
    return this.ar.shift();
}

//module is part of Node
if(typeof module !== 'undefined')
{
    module.exports = ArrayJs;
}