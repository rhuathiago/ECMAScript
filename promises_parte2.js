let promessa = new Promise((resolve, reject) => {

    setTimeout(() => {
        let resposta_da_requisicao = {}

        if (false) {
            resposta_da_requisicao = {
                codigo: 1050,
                erro: 'Falha de autorização'
            }
            reject(resposta_da_requisicao)
        }

        resposta_da_requisicao = {
            0: { id: 1, nome: 'João' },
            1: { id: 2, nome: 'José' },
            2: { id: 3, nome: 'Maria' },
        }

        resolve(resposta_da_requisicao)

    }, 4000)

}).then(dados => {
    console.log(dados)

    let promessa2 = new Promise((resolve, reject) => {

        setTimeout(() => {
            let resposta_da_requisicao = {}

            if (false) {
                resposta_da_requisicao = {
                    codigo: 7788,
                    erro: 'Erro ao recuperar os posts dos usuários'
                }
                reject(resposta_da_requisicao)
            }

            resposta_da_requisicao = {
                0: {
                    id: 1, usuario_id: 1, posts: [
                        { id: 1, post: 'Post 1' },
                        { id: 2, post: 'Post 2' }
                    ]
                },
                1: {
                    id: 2, usuario_id: 2, posts: [
                        { id: 3, post: 'Post 1' },
                        { id: 4, post: 'Post 2' }
                    ]
                },
                2: {
                    id: 3, usuario_id: 3, posts: [
                        { id: 5, post: 'Post 1' },
                        { id: 6, post: 'Post 2' }
                    ]
                },
            }

            resolve(resposta_da_requisicao)

        }, 4000)

    }).then(dados => {
        console.log(dados)
    }).catch(erro => {
        console.log(erro)
    })

}).then((param) => {
    console.log('Then número 2', param)
}).then(() => {
    console.log('Then número 3')
}).then(() => {
    console.log('Then número 4')
    return 'Parâmetro capturado no then anterior e enviado para o then seguinte'
}).catch(erro => {
    console.log('Operação sequencial (Catch): ', erro)
    return 'Parâmetro capturado no catch e enviado para o then seguinte'
}).then((param) => {
    console.log('Then número 5', param)
}).then(() => {
    console.log('Then número 6')
})