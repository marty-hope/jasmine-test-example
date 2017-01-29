function ArrayJs(){
    this.ar = [];
};

//module is part of Node
if(typeof module !== 'undefined')
{
    module.exports = ArrayJs;
}