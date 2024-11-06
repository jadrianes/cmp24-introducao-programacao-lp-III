const produtos = [
  { nome: "Arroz", precoOriginal: 20 },
  { nome: "Feijão", precoOriginal: 10 },
  { nome: "Macarrão", precoOriginal: 15 },
  { nome: "Óleo", precoOriginal: 12 },
];

// elemento = { nome: "Arroz", precoOriginal: 20 }
const produtosComDesconto = produtos.map((elemento) => (
  { nome: elemento.nome, precoComDesconto: elemento.precoOriginal * 0.9 }
));
console.log(produtosComDesconto)


// () => {} // ahh abriu a funcao
// () => ({}) // naooo, é um objeto