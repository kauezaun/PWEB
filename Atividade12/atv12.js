function CalcularArea(b,a){
    return b * a;
}

function Resultado(){
    let base = (Number(prompt("Digite um valor para base")));
    let altura = (Number(prompt("Digite um valor para altura")));
    let result = CalcularArea(base,altura);
    
    alert(`A area do retangulo eh ${result} `);
}
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    // GETS
    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    get banco() {
        return this._banco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    get saldo() {
        return this._saldo;
    }

    // SETS
    set nomeCorrentista(valor) {
        this._nomeCorrentista = valor;
    }

    set banco(valor) {
        this._banco = valor;
    }

    set numeroConta(valor) {
        this._numeroConta = valor;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}

// Classe Corrente
class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);

        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}

// Classe Poupanca
class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);

        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(valor) {
        this._juros = valor;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(valor) {
        this._dataVencimento = valor;
    }
}

// FUNÇÃO DO BOTÃO
function mostrarContas(){

    // Conta Corrente
    let cc = new Corrente(
        "João",
        "Banco do Brasil",
        "12345",
        2000,
        1000
    );

    // Conta Poupança
    let cp = new Poupanca(
        "Maria",
        "Caixa",
        "98765",
        5000,
        0.05,
        "10/12/2025"
    );

    alert(
        "=== CONTA CORRENTE ===\n" +
        "Nome: " + cc.nomeCorrentista + "\n" +
        "Banco: " + cc.banco + "\n" +
        "Saldo: " + cc.saldo + "\n" +
        "Saldo Especial: " + cc.saldoEspecial
    );

    alert(
        "=== CONTA POUPANÇA ===\n" +
        "Nome: " + cp.nomeCorrentista + "\n" +
        "Banco: " + cp.banco + "\n" +
        "Saldo: " + cp.saldo + "\n" +
        "Juros: " + cp.juros + "\n" +
        "Data Vencimento: " + cp.dataVencimento
    );
}