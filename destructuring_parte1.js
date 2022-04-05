let frutas = ['Melão', 'Melancia', 'Morango', 'Abacaxi', 'Jaca']

let [a, b = 'Abacate', c, d, e = 'Banana'] = frutas

let coisas = [['Melão', 'Melancia', 'Morango', 'Abacaxi', 'Jaca'], ['Rhuã', 'Thiago']]
let [,[,n2]] = coisas
let [[, , n3],] = coisas

console.log(n2)
console.log(n3)