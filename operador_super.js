class Animal {
  constructor(cor, tamanho, peso) {
    this.cor = cor
    this.tamanho = tamanho
    this.peso = peso
  }

  dormir() {
    console.log('Dormir')
  }
}

class Passaro extends Animal {
  constructor(bico, cor, tamanho, peso) {
    super(cor, tamanho, peso)
    this.bico = bico
  }

  voar() {
    console.log('Voar')
  }

}

class Papagaio extends Passaro {
  constructor(sabeFalar, bico, cor, tamanho, peso) {
    super(bico, cor, tamanho, peso)
    this.sabeFalar = sabeFalar
  }

  falar() {
    console.log('Falar')
  }
}

let passaro = new Passaro('curto','verde', 50, 600)
let papagaio = new Papagaio(true, 'médio', 'verde', 40, 500)
let papagaio2 = new Papagaio(false, 'curto', 'azul', 30, 250)

console.log(passaro)
console.log(papagaio)
console.log(papagaio2)