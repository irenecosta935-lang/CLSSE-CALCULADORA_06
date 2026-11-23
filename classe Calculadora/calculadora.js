var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.subtracao = function () {
        return this.operando1 - this.operando2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(10, 5);
console.log(calculadora.soma());
console.log(calculadora.subtracao());
