# Métodos funcionais em Arrays

## ForEach

No JavaScript, o método `forEach()` é usado para iterar sobre cada elemento de um array, executando uma função callback para cada um deles. Ele é ideal quando você precisa processar ou exibir cada item do array, mas não retorna um novo array nem modifica o array original. Ao contrário de métodos como `map()` ou `filter()`, o `forEach()` é geralmente usado quando o foco é executar uma ação com cada elemento, e não transformar ou filtrar a lista.

### Características principais do `forEach()`:

- Itera sobre todos os elementos de um array e executa uma função para cada item.
- Não retorna nada; o objetivo é apenas realizar uma ação para cada elemento.
- Não interrompe o loop; ele percorre todos os elementos do array.

### Exemplos de uso

#### Exemplo 1: Exibindo uma lista de nomes

Neste exemplo, `forEach()` é usado para exibir o nome de cada pessoa em uma lista.

```javascript
const nomes = ["Ana", "Carlos", "Maria", "João"];
nomes.forEach((nome) => {
  console.log(nome);
});
// Saída:
// Ana
// Carlos
// Maria
// João
```

#### Exemplo 2: Calculando o total de um carrinho de compras

Aqui, `forEach()` é utilizado para somar os preços dos produtos de um carrinho de compras.

```javascript
const carrinho = [
  { produto: "Celular", preco: 1200 },
  { produto: "Fone de Ouvido", preco: 100 },
  { produto: "Carregador", preco: 50 },
];

let total = 0;
carrinho.forEach((item) => {
  total += item.preco;
});

console.log("Total do carrinho:", total); // Saída: 1350
```

### Atividade: Contabilizando as Vendas de Produtos

Você trabalha em uma loja que vende diferentes tipos de produtos. Ao final do dia, você precisa contar quantos produtos de cada tipo foram vendidos para controlar o estoque. Cada venda é registrada em uma lista, onde cada elemento representa o tipo de produto vendido.

1. Crie um array `vendas` contendo strings, onde cada string representa o tipo de produto vendido.
2. Use `forEach()` para contar quantas vezes cada tipo de produto foi vendido.
3. Exiba o total de vendas por produto.

#### Código inicial

```javascript
const vendas = [
  "Celular",
  "Notebook",
  "Celular",
  "Tablet",
  "Notebook",
  "Celular",
];

const contadorVendas = {};

// Use o método reduce() para calcular o total de vendas

// Saída esperada: { Celular: 3, Notebook: 2, Tablet: 1 }
```

## Filter

No JavaScript, o método `filter()` é usado para criar um novo array contendo apenas os elementos que passam por um teste específico, definido em uma função de callback. Ele é especialmente útil quando queremos filtrar dados em um array e retornar apenas os valores que atendem a uma determinada condição.

### Características principais do `filter()`:

- Retorna um novo array contendo apenas os elementos que retornaram `true` no teste aplicado.
- Não modifica o array original.
- É útil para selecionar dados específicos em listas de forma simples e eficaz.

### Exemplos de uso

#### Exemplo 1: Filtrar números maiores que 10

Este exemplo usa o `filter()` para criar um novo array contendo apenas os números maiores que 10.

```javascript
const numeros = [5, 12, 8, 20, 7];
const maioresQueDez = numeros.filter((num) => num > 10);

console.log(maioresQueDez); // Saída: [12, 20]
```

#### Exemplo 2: Filtrar usuários com idade maior ou igual a 18

Neste exemplo, `filter()` é usado para selecionar apenas os usuários que têm idade suficiente para serem considerados adultos (idade maior ou igual a 18).

```javascript
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 16 },
  { nome: "Maria", idade: 19 },
  { nome: "Pedro", idade: 15 },
];

const adultos = usuarios.filter((usuario) => usuario.idade >= 18);

console.log(adultos);
// Saída: [{ nome: 'Ana', idade: 25 }, { nome: 'Maria', idade: 19 }]
```

### Atividade: Filtrando Produtos por Estoque

Imagine que você é responsável pelo gerenciamento de estoque de uma loja online. Sua tarefa é criar uma lista de produtos que estão disponíveis em estoque para que os clientes saibam quais itens podem comprar.

#### Requisitos

1. Você terá um array de objetos chamado `produtos`, onde cada objeto possui as propriedades `nome` e `emEstoque` (um valor booleano que indica se o produto está disponível).
2. Use o método `filter()` para criar um novo array que contenha apenas os produtos em estoque (`emEstoque: true`).

```javascript
const produtos = [
  { nome: "Celular", emEstoque: true },
  { nome: "Notebook", emEstoque: false },
  { nome: "Tablet", emEstoque: true },
  { nome: "Fone de Ouvido", emEstoque: false },
];

// Use o método filter() para selecionar produtos em estoque
```

#### Saída esperada

```javascript
[
  { nome: "Celular", emEstoque: true },
  { nome: "Tablet", emEstoque: true },
];
```

## Reduce

No JavaScript, o método `reduce()` é usado para reduzir um array a um único valor ou resultado, aplicando uma função de callback a cada elemento do array. Ele acumula o valor retornado pela função de callback em um acumulador, que é atualizado a cada iteração. Esse método é muito versátil e pode ser usado para realizar operações como somar valores, contar elementos ou até transformar estruturas complexas.

### Características principais do `reduce()`:

- Recebe uma função callback com dois parâmetros principais: o acumulador e o valor atual.
- Retorna um único valor ou objeto, dependendo do uso.
- Opcionalmente, aceita um valor inicial para o acumulador.

### Exemplos de uso

#### Exemplo 1: Somar todos os números de um array

Neste exemplo, `reduce()` é usado para calcular a soma de todos os números de um array.

```javascript
const numeros = [10, 20, 30, 40];
const soma = numeros.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0
);

console.log(soma); // Saída: 100
```

#### Exemplo 2: Contar a ocorrência de cada letra em uma string

Aqui, `reduce()` é utilizado para contar quantas vezes cada letra aparece em uma string, retornando um objeto com as contagens.

```javascript
const letras = ["a", "b", "a", "c", "b", "a"];
const contagem = letras.reduce((acumulador, letra) => {
  acumulador[letra] = (acumulador[letra] || 0) + 1;
  return acumulador;
}, {});

console.log(contagem); // Saída: { a: 3, b: 2, c: 1 }
```

### Atividade: Calculando o Total de Vendas

Imagine que você é o responsável pelo setor financeiro de uma loja e precisa calcular o total de vendas do dia. Você tem uma lista de objetos, onde cada objeto representa uma venda e possui o valor da venda em uma propriedade `valor`.

#### Requisitos

1. Use o método `reduce()` para somar todos os valores das vendas e obter o total do dia.
2. O array de vendas se chama `vendas`, e cada objeto possui uma propriedade `valor` com o valor da venda.

#### Código inicial

Oriente os alunos a começar com o seguinte código:

```javascript
const vendas = [
  { produto: "Celular", valor: 1000 },
  { produto: "Notebook", valor: 2000 },
  { produto: "Tablet", valor: 800 },
  { produto: "Fone de Ouvido", valor: 200 },
];

// Use o método reduce() para calcular o total de vendas

// Saída esperada: 4000
```
