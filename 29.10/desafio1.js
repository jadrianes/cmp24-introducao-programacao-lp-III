const estoque = ["Camisa", "Calça", "Sapato"];

function adicionarProduto(estoque, produto) {
  const exiteNoEstoque = estoque.includes(produto);

  // const index = estoque.findIndex(produto);
  // const existeNoEstoque = index !== -1;
  // const existeNoEstoque = index >= 0;
  // const naoExisteNoEstoque = index === -1;

  // if (exiteNoEstoque === true) { é a mesma coisa da linha de baixo
  if (exiteNoEstoque) {
    console.log("O produto " + produto + " já está no estoque!");
  } else {
    estoque.push(produto);
    console.log(`O produto ${produto} foi adicionado ao estoque!`);
  }

  console.log("Estoque: ", estoque, '\n');
}


adicionarProduto(estoque, "Camisa");
// Resultado esperado: "O produto Camisa já está no estoque."
// Estoque: ["Camisa", "Calça", "Sapato"]

adicionarProduto(estoque, "Boné");
// Resultado esperado: "O produto Boné foi adicionado ao estoque."
// Estoque: ["Camisa", "Calça", "Sapato", "Boné"]

adicionarProduto(estoque, "Boné");

adicionarProduto(estoque, "Camisola");


// const estoque = ["Camisa", "Calça", "Sapato"];

// function adicionarProduto(estoque, produto) {
//   const produtoExite = estoque.includes(produto)

//   if (produtoExite) {
//     console.log("O produto " + produto + " já está no estoque.")
//   } else {
//     console.log("O produto " + produto + " foi adicionado ao estoque.")
//     estoque.push(produto)
//   }

//   console.log("Estoque: ", estoque)
// }

// adicionarProduto(estoque, "Camisola")
// adicionarProduto(estoque, "Camisola")