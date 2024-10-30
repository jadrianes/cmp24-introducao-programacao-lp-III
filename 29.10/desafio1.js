const estoque = ["Camisa", "Calça", "Sapato"];

function adicionarProduto(estoque, produto) {
  const produtoExite = estoque.includes(produto)

  if (produtoExite) {
    console.log("O produto " + produto + " já está no estoque.")
  } else {
    console.log("O produto " + produto + " foi adicionado ao estoque.")
    estoque.push(produto)
  }

  console.log("Estoque: ", estoque)
}

adicionarProduto(estoque, "Camisola")
adicionarProduto(estoque, "Camisola")