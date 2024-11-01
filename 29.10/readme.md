# Manipulando arrays

Os arrays em JavaScript são fundamentais para armazenar e manipular listas de dados de maneira flexível e eficiente. Além de permitirem armazenar múltiplos valores em uma única variável, os arrays possuem uma série de métodos que facilitam muito a manipulação desses dados. Vamos conhecer alguns desses métodos e ver o que cada um faz!

## Métodos de arrays

### 1. **`push`**

Esse método adiciona um ou mais elementos ao final do array, retornando o novo comprimento do array. Ele é útil quando você quer incluir novos dados ao fim da lista.

**Exemplo:**

```javascript
const frutas = ["maçã", "banana"];
frutas.push("laranja"); // ["maçã", "banana", "laranja"]
```

### 2. **`pop`**

O método `pop` remove o último elemento do array, retornando esse elemento. É prático para casos em que queremos excluir o último item de uma lista.

**Exemplo:**

```javascript
const frutas = ["maçã", "banana", "laranja"];
const ultimaFruta = frutas.pop(); // "laranja"
console.log(frutas); // ["maçã", "banana"]
```

### 3. **`unshift`**

Esse método adiciona um ou mais elementos ao início do array, deslocando os elementos existentes. É útil para inserir valores no começo da lista.

**Exemplo:**

```javascript
const frutas = ["banana", "laranja"];
frutas.unshift("maçã"); // ["maçã", "banana", "laranja"]
```

### 4. **`shift`**

O método `shift` remove o primeiro elemento do array e retorna esse elemento. Ele é interessante quando você quer remover o primeiro item da lista.

**Exemplo:**

```javascript
const frutas = ["maçã", "banana", "laranja"];
const primeiraFruta = frutas.shift(); // "maçã"
console.log(frutas); // ["banana", "laranja"]
```

### 5. **`find`**

O método `find` retorna o primeiro elemento que satisfaz uma condição especificada em uma função de teste. Caso nenhum elemento atenda à condição, ele retorna `undefined`.

**Exemplo:**

```javascript
const numeros = [1, 2, 3, 4, 5];
const numeroMaiorQueTres = numeros.find((numero) => numero > 3); // 4
```

### 6. **`findIndex`**

O `findIndex` funciona de maneira semelhante ao `find`, mas em vez de retornar o elemento, ele retorna o índice do primeiro elemento que atende à condição. Se nenhum elemento satisfaz a condição, ele retorna `-1`.

**Exemplo:**

```javascript
const numeros = [1, 2, 3, 4, 5];
const indiceMaiorQueTres = numeros.findIndex((numero) => numero > 3); // 3
```

### 7. **`includes`**

O método `includes` verifica se um valor está presente no array, retornando `true` se o valor for encontrado e `false` caso contrário. Esse método é ótimo para checar a existência de um valor específico na lista.

**Exemplo:**

```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva")); // false
```

### 8. **`sort`**

Esse método organiza os elementos do array em ordem crescente ou de acordo com uma função de comparação. É muito útil para organizar listas, mas cuidado: ele altera o array original.

**Exemplo:**

```javascript
const numeros = [3, 1, 4, 1, 5, 9];
numeros.sort(); // [1, 1, 3, 4, 5, 9]
```

> Esses métodos tornam o uso de arrays mais poderoso e flexível, permitindo adicionar, remover, organizar e buscar dados de várias maneiras. Aproveite essas funcionalidades para tornar seu código mais limpo e eficiente!

Para aprender mais funções, [clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Desafios

### ~~~ Desafio 1: Lista de Produtos em Estoque

Você está desenvolvendo um sistema simples de controle de **estoque de produtos** para uma loja. Esse sistema possui um array chamado `estoque` que armazena os nomes dos produtos em estoque, como strings.

Crie uma função chamada `adicionarProduto` que:

1. Verifique se o produto já existe no array `estoque`.
2. Se o produto **já existir**, exiba uma mensagem: `"O produto [nome] já está no estoque."`
3. Se o produto **não existir**, adicione-o ao array `estoque` e exiba uma mensagem: `"O produto [nome] foi adicionado ao estoque."`.
4. Ao final, mostre o array `estoque` atualizado.

#### Exemplo de Dados

```javascript
const estoque = ["Camisa", "Calça", "Sapato"];
```

#### Exemplo de Uso

```javascript
adicionarProduto(estoque, "Camisa");
// Resultado esperado: "O produto Camisa já está no estoque."
// Estoque: ["Camisa", "Calça", "Sapato"]

adicionarProduto(estoque, "Boné");
// Resultado esperado: "O produto Boné foi adicionado ao estoque."
// Estoque: ["Camisa", "Calça", "Sapato", "Boné"]
```

### ~~~ Desafio 2: Gerenciando a Lista de Convidados para um Evento

Você está criando um programa para gerenciar a **lista de convidados** de um evento. A lista é representada por um array chamado `convidados`, onde cada item é uma string com o nome de um convidado.

Crie uma função chamada `adicionarConvidado` que:

1. Verifique se o convidado já está na lista `convidados`.
2. Se o convidado **já estiver na lista**, exiba uma mensagem: `"O convidado [nome] já está na lista."`
3. Se o convidado **não estiver na lista**, adicione-o e exiba uma mensagem: `"O convidado [nome] foi adicionado a lista."`
4. Mostre a quantidade de convidados.

#### Exemplo de Dados

```javascript
const convidados = ["Ana", "João", "Carlos"];
```

#### Exemplo de Uso

```javascript
adicionarConvidado(convidados, "Ana");
// Resultado esperado: "A convidada Ana já está na lista."
// Atualmente há 3 convidados na lista.

adicionarConvidado(convidados, "Beatriz");
// Resultado esperado: "A convidada Beatriz foi adicionada na lista."
// Atualmente há 4 convidados na lista.
```

### ~~~ Desafio 3: Organizando a Lista de Presença

Imagine que você está desenvolvendo um programa de **controle de presença** para uma aula de programação. No sistema, você possui uma lista chamada `alunosPresentes`, que contém o nome dos alunos que estão confirmados na aula.

No entanto, quando um aluno precisa sair da aula mais cedo, ele deve ser **removido da lista de presença**. Sua tarefa é escrever uma função que verifique se o nome do aluno está na lista e, caso esteja, remova-o.

#### Requisitos

1. A função deve se chamar `removerAluno`.
2. A função deve receber dois parâmetros:
   - `alunosPresentes`: um array de strings que representa a lista de alunos presentes.
   - `aluno`: uma string que é o nome do aluno a ser removido.
3. A função deve verificar se o `aluno` está na lista:
   - Caso esteja, o aluno deve ser removido da lista e mostre: `"Aluno [nome] removido da lista."`
   - Caso não esteja, a função não deve fazer nada e mostrar: `"Aluno [nome] não encontrado na lista."`
4. A função deve retornar o array `alunosPresentes` atualizado.

#### Dica

Você pode usar métodos como `includes` para verificar a existência do aluno e `splice` para remover um elemento de uma posição específica.

#### Exemplo

```javascript
const alunosPresentes = ["Ana", "Bruno", "Carla", "Diego"];

removerAluno(alunosPresentes, "Bruno");
// Resultado esperado: ["Ana", "Carla", "Diego"]

removerAluno(alunosPresentes, "Lucas");
// Resultado esperado: ["Ana", "Carla", "Diego"]
```

---

> **Nota:** Este conteúdo foi criado com a assistência do ChatGPT.
