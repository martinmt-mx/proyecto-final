const Nodo = require('./nodo')._default;
const Expresiones = require('./expresiones')._default;

const { isInstanceOf } = require('../proyecto-final/instancia');
const { printInfo } = require("../proyecto-final/printConsola");

class BinaryTree {
    preOrderText = [];
    postOrderText = [];

  constructor(expression) {
    if(!isInstanceOf(expression, Expresiones)) throw new Error('A  mathematical expressions is required');

    this.root = null;
    this.expression = expression;

    this.loadNodes();
  }

  loadNodes(){
      this.expression.toArray().forEach((c,i) =>{
          this.addRecursive(c);
      })

      printInfo('PreOrder', 'results:');
      this.preOrder();
      console.log(this.preOrderText.join(', ') + '\n');

      printInfo('PostOrder', 'results:');
      this.postOrder();
      console.log(this.postOrderText.join(', ') + '\n');
  }

  isEmpty() {
    return this.root === null;
  }

  add(valor) {
    if (this.isEmpty()) {
      this.root = new Nodo(valor);
      return;
    }

    let aux = this.root;

    while (aux) {
      if (valor < aux.valor) {
        if (aux.izquierda) {
          aux = aux.izquierda;
        } else {
          aux.izquierda = new Nodo(valor);
          return;
        }
      } else {
        if (aux.derecha) {
          aux = aux.derecha;
        } else {
          aux.derecha = new Nodo(valor);
          return
        }
      }
    }
  }

  addRecursive(valor, nodo = this.root) {
    if (!nodo) {
      this.root = new Nodo(valor);
      return
    }

    if (valor < nodo.valor) {
      if (nodo.izquierda) {
        return this.addRecursive(valor, nodo.izquierda);
      }
      nodo.izquierda = new Nodo(valor);
      return
    } else {
      if (nodo.derecha) {
        return this.addRecursive(valor, nodo.derecha)
      }
      nodo.derecha = new Nodo(valor)
      return;
    }
  }

  preOrder(nodo = this.root, firstAttemp) {
    if(firstAttemp) this.preOrderText = []

    if (!nodo) {
      return
    }
    this.preOrderText.push(nodo.valor);
    this.preOrder(nodo.izquierda)
    this.preOrder(nodo.derecha)
  }

  postOrder(nodo = this.root, firstAttemp) {
    if(firstAttemp) this.postOrderText = []

    if (!nodo) {
      return;
    }
    this.postOrder(nodo.izquierda)
    this.postOrder(nodo.derecha)
    this.postOrderText.push(nodo.valor)
  }
}

module.exports._default = BinaryTree