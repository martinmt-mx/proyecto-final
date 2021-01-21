const BinaryTree = require("../proyecto-final/arboool")._default
const Expresiones = require("../proyecto-final/expresiones")._default

const { isInstanceOf } = require("../proyecto-final/instancia")
const { printSuccess } = require("../proyecto-final/printConsola")

class Formula {
    constructor(expresion) {
        console.log(expresion.constructor.name)
        if (!isInstanceOf(expresion, Expresiones))
          throw new Error("SE NECESITA UNA EXPRESION MATEMÁTICA");
    
        this.expresion = expresion;
        this.binaryTree = new BinaryTree(this.expresion);
        
        this.calculateResult();
      }
    
      calculateResult(){
        this.result = this.expresion.getResults();
        printSuccess('El resultado es: ', this.result);
      }
}

module.exports._default = Formula;