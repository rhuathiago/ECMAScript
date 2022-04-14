let nomes = [
    'João,José,Maria',
    'Sandra,Paulo',
    'Antônia,Fernanda,Marcos'
]

console.log(nomes)

let nomesMap = nomes.map(item => {
    return item.split(',')
})

console.log(nomesMap)

let nomesFlatMap = nomes.flatMap(item => {
    return item.split(',')
})

console.log(nomesFlatMap)