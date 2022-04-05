class Sofa {
    constructor(cor, quantidadeLugares, reclinavel){
        this.cor = cor
        this.quantidadeLugares = quantidadeLugares
        this.reclinavel = reclinavel
    }
    reclinarSofa(){
        if(this.reclinavel === true){
            console.log('É reclinável')
        }else {
            console.log('Não é reclinável')
        }
    }

}
let sofa = new Sofa('verde', 3, true)
let sofa2 = new Sofa('azul', 2, false)

let sofas = [
    new Sofa('verde', 3, true), 
    new Sofa('azul', 2, false)
]

console.log(sofas)

sofa.reclinarSofa()
sofa2.reclinarSofa()