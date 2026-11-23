"use strict";
class Conta {
    constructor(id, numero, saldo) {
        this._id = id;
        this._numero = numero;
        this._saldo = saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    sacar(valor) {
        this._saldo = this._saldo - valor;
    }
    transferir(contaDestino, valor) {
        /* this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;*/
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    get saldo() {
        return this._saldo;
    }
    get id() {
        return this._id;
    }
}
class Poupanca extends Conta {
    constructor(id, numero, saldo, taxaJuros) {
        super(id, numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    renderJuros() {
        let juros = this.saldo * this._taxaJuros / 100;
        this.depositar(juros);
    }
}
class ContaDosSonhos extends Poupanca {
    depositar(valor) {
        super.depositar(valor * 2);
    }
}
class Banco {
    constructor() {
        this._contas = [];
    }
    inserir(conta) {
        this._contas.push(conta);
    }
    consultar(id) {
        for (let conta of this._contas) {
            if (conta.id == id) {
                return conta;
            }
        }
        return null;
    }
    consultarIndice(id) {
        for (let i = 0; i < this._contas.length; i++) {
            let conta = this._contas[i];
            if (conta && conta.id == id) {
                return i;
            }
        }
        return -1;
    }
    excluir(id) {
        let indice = this.consultarIndice(id);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    depositar(id, valor) {
        let contaProcurada = this.consultar(id);
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }
    sacar(id, valor) {
        let contraProcurada = this.consultar(id);
        if (contraProcurada) {
            contraProcurada.sacar(valor);
        }
    }
    transferir(idOrigem, idDestino, valor) {
        let contaOrigem = this.consultar(idOrigem);
        let contaDestino = this.consultar(idDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    renderJuros(id) {
        let contaProcurada = this.consultar(id);
        if (contaProcurada instanceof Poupanca) {
            contaProcurada.renderJuros();
        }
    }
}
let banco = new Banco();
let poupanca1 = new Poupanca(1, '111-1', 100, 1);
let conta1 = new Conta(2, '222-2', 200);
let ContaDosSonhos1 = new ContaDosSonhos(3, '333-3', 300, 1);
banco.inserir(poupanca1);
banco.inserir(conta1);
banco.inserir(ContaDosSonhos1);
banco.transferir(2, 1, 50);
banco.depositar(3, 1000);
banco.renderJuros(2);
banco.renderJuros(1);
banco.renderJuros(3);
console.log(banco.consultar(1));
console.log(banco.consultar(2));
console.log(banco.consultar(3));
