let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'única',
    aro: 12,
    pedalar() { console.log('Método pedalar executado') }
}
console.log(Bicicleta1)

let BicicletaFactory = function (cor, marcha, aro) {
    return {
        cor,
        marcha,
        aro,
        tipoPedal,
        pedalar() { console.log('Método pedalar executado') }
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26)
console.log(Bicicleta3)

let Bicicleta4 = BicicletaFactory('Preta', '21', 29)
console.log(Bicicleta4)

