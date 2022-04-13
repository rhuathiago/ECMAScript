function soma(...param) {
    let resultado = 0

    console.log(param)

    param.forEach(v => resultado += v)

    return resultado
}

console.log(soma(9, 4, 7, -4, 10, 750))

function multiplicacao(m, ...p) {
    console.log(`m é igual a ${m}`)
    let resultado = 0
    console.log(`p é igual a ${p}`)

    p.forEach(v => resultado += m * v)

    return resultado
}

console.log(multiplicacao(5, 9, 4, 10, 34))