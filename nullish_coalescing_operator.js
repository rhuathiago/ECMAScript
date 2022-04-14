let test1 = null || 'Valor a direita'
let test2 = 0 || 'Valor a direita'
let test3 = undefined || 'Valor a direita'
let test4 = '' || 'Valor a direita'
let test5 = 'Valor a esquerda' || 'Valor a direita'

console.log('teste1:', test1)
console.log('teste2:', test2)
console.log('teste3:', test3)
console.log('teste4:', test4)
console.log('teste5:', test5)

console.log('------------------------')

test1 = null ?? 'Valor a direita'
test2 = 0 ?? 'Valor a direita'
test3 = undefined ?? 'Valor a direita'
test4 = '' ??'Valor a direita'
test5 = 'Valor a esquerda' ?? 'Valor a direita'

console.log('teste1:', test1)
console.log('teste2:', test2)
console.log('teste3:', test3)
console.log('teste4:', test4)
console.log('teste5:', test5)

