"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    soma() {
        return this.operando1 + this.operando2;
    }
    subtracao() {
        return this.operando1 - this.operando2;
    }
}
const calculadora = new Calculadora(10, 5);
console.log(calculadora.soma());
console.log(calculadora.subtracao());
