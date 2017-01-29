var spongeBob = {
    name : "squarePants",
    swear : function(swearWord) {
                name = "spongy";
                console.log("You "+ swearWord);
                return this;
            }
}

//finally spongebob learns good manners too. EVOLUTION!
spongeBob.apologize = function() {
    console.log("Hey " + this.name + ", I'm sorry man!");
    return this;
}

//module is part of Node
if(typeof module !== 'undefined')
{
    module.exports = spongeBob;
}