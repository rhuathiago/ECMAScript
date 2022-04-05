 let produto = {
     descricao: 'Notebook',
     preco: 1800,
     detalhes: {
         fabricante: 'abc',
         modelo: 'xyz'
     }
 }

 let { descricao , preco} = produto

 let { descricao: d, preco: p = 1000, desconto = 5} = produto

 let { detalhes: { fabricante: f, modelo: m }} = produto

 console.log(d, p, desconto, f, m)