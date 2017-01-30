function ArrayJs(){
    this.ar = [];
};

ArrayJs.prototype.add = function (val){
    return this.ar.push(val);
};

ArrayJs.prototype.getFirstItem = function()
{
    return this.ar.shift();
}

ArrayJs.prototype.addToArray = function(items)
{
    if(items)
    {
        items.forEach((el) => this.ar.unshift(el));
    }
}

ArrayJs.prototype.GetLastItem = function() {
    return this.ar.pop();
}

//module is part of Node
if(typeof module !== 'undefined')
{
    module.exports = ArrayJs;
}