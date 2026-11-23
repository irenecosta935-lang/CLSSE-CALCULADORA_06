class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;

    constructor(id: number, numero: string, saldo: number) {
        this._id = id;
        this._numero = numero;
        this._saldo = saldo;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        /* this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;*/
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    get saldo(): number {
        return this._saldo;
    }

    get id(): number {
        return this._id;
    }

    get numero(): string {
    return this._numero;
}
    }
    

class Poupanca extends Conta {
    private _taxaJuros: number

    constructor(id: number, numero: string, saldo: number, taxaJuros: number) {
        super(id, numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    renderJuros(): void {
        let juros = this.saldo * this._taxaJuros / 100;
        this.depositar(juros);
    }
}

class ContaDosSonhos extends Poupanca {
    depositar(valor: number): void {
        super.depositar(valor * 2);
    }
}


class Banco {
    private _contas: Conta[];

    constructor() {
        this._contas = [];
    }

    inserir(conta: Conta): void {
        this._contas.push(conta);
    }

    consultar(id: number): Conta | null {

        for (let conta of this._contas) {
            if (conta.id == id) {
                return conta;
            }
        }

        return null;
    }

    

    private consultarIndice(id: number): number {

        for (let i = 0; i < this._contas.length; i++) {
            let conta = this._contas[i];
            if (conta && conta.id == id) {
                return i;
            }
        }

        return -1;
    }

    excluir(id: number): void {
        let indice = this.consultarIndice(id);

        if (indice != -1) {
            for (let i = indice; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1]!;
            }

            this._contas.pop();
        }


    }

    depositar(id: number, valor: number): void {
        let contaProcurada: Conta | null = this.consultar(id);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    sacar(id: number, valor: number): void {
        let contraProcurada: Conta | null = this.consultar(id);

        if (contraProcurada) {
            contraProcurada.sacar(valor);
        }
    }

    transferir(idOrigem: number, idDestino: number, valor: number): void {
        let contaOrigem: Conta | null = this.consultar(idOrigem);
        let contaDestino: Conta | null = this.consultar(idDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    renderJuros(id: number): void {
        let contaProcurada:  Conta | null = this.consultar(id);

        if (contaProcurada instanceof Poupanca) {
            contaProcurada.renderJuros();
        }
    }
}

let banco: Banco = new Banco();
let poupanca1: Poupanca = new Poupanca(1, '111-1', 100, 1);
let conta1: Conta = new Conta(2, '222-2', 200);
let ContaDosSonhos1: ContaDosSonhos = new ContaDosSonhos(3, '333-3',300, 1);
banco.inserir(poupanca1);
banco.inserir(conta1);
banco.inserir(ContaDosSonhos1);

banco.transferir(2,1, 50);
banco.depositar(3,1000);

banco.renderJuros(2);
banco.renderJuros(1);
banco.renderJuros(3);

console.log(banco.consultar(1));
console.log(banco.consultar(2));
console.log(banco.consultar(3));
