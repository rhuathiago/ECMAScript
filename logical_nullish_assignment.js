let v1 = 10
let v2 = null

v1 ??= 50
v2 ??= 100

console.log(v1, v2)

let carro = {
    marca: 'Volkswagen',
    modelo: 'Jetta'
}

carro.marca ??= 'Volkswagen'
carro.modelo ??= 'T-Cross'
carro.ano ??= '2021'

console.log(carro)

let arr = ['uva', 'Rhuã', null, undefined, 5, []]

arr.forEach((item, indice) => {
    arr[indice] ??= '<não informado>'
})

console.log(arr)