class ContaBancaria {

    constructor() {
        this.agencia = 100000
        this.numeroConta = 9876537
        this.saldo = 300
        this.limite = 600
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito

    }

    sacar(valorSaque){
        this.saldo -= valorSaque
    }
    
    consultarSaldo() {
        return this.saldo
    }

}
let x = new ContaBancaria()
let y = new ContaBancaria()

console.log(x.consultarSaldo)
x.depositar(50)
console.log(x.consultarSaldo())
x.sacar(30)
console.log(x.consultarSaldo())