/*video 10 superninja => ninja*/
/*let naruto =
{
    attack: function() {return "rasengan";},
    name: "naruto uzumaki",
    weapon: "kun"
};

document.write("<h2>ecriture literale</h2>");
document.write(naruto.name +"<br> ");
document.write(naruto.attack() +"<br>");

//..............................

function Ninja(name, weapon)
{
    this.attack = function()
    {
        return "rahhhh!!";
    }
    this.name = name || "naruto uzumaki";
    this.weapon = weapon || "shuriken";
}
document.write("<h2>constructeur via fonction</h2>");
let hinata = new Ninja("hinata hyùga");
document.write(hinata.name + "<br>");
document.write(hinata.attack() + "<br>");

//......................................

class genin
{
    constructor(name ="naruto uzumaki", weapon ="shuriken")
    {
        this.name = name;
        this.weapon = weapon;

    }
    attack()
    {
        return "rahhhh!!";
    }
}
class shuunin
{
    defend()
    {}
}
document.write("<h2>constructeur via classe</h2>");
let sasuke = new genin("sasuke uchiha , shuriken fuma");
document.write(sasuke.name + "<br>");
document.write(sasuke.attack() + "<br>");*/
function Ninja(name = "inconnu")//parent
{
    this.attack = function() {return  "Aya !!" };
    this.name = name;
}
function superNinja(name= "inconnu", weapon = "kunai")//enfant
{
    Ninja.call(this, name);
    this.weapon= weapon;
}
superNinja.prototype= objet.create(Ninja.prototype);//clonage deux objets distincts
superNinja.prototype= Ninja.prototype;//liaison d'un prototype a un autre


let naruto = new superNinja("shuriken");

superNinja.prototype.age = 24 ;

console.log(Ninja.prototype);
console.log(superNinja.prototype);