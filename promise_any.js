const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 resolvida'), 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P2 resolvida'), 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P3 rejeitada'), 1000)
})

let promises = [p1, p2, p3]

Promise.any(promises)
    .then((resolvida) => {
        console.log(resolvida)
    })
    .catch((erro) => {
        console.log(erro)
    })