class Pessoa {

    #humor = null

    #mensagens = [
        'Seja feliz',
        'Não estou pra conversa hoje'
    ]

    constructor(nome) {
        this.#mudarHumor()
        this.nome = nome
    }

    dizerOi() {
        return `Olá, meu nome é ${ this.nome}`
    }

    getHumor() {
        return this.#humor
    }

    #mudarHumor() {
        this.#humor = Math.floor(Math.random() * 2)
    }

    getMensagem() {
        return this.#mensagens[this.#humor]
    }
}

let p = new Pessoa('Rhuã')

console.log(p.getMensagem())

