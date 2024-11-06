# Estrutura de repetição: while

`while` cria um laço que executa um bloco de comando especifico enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução do bloco.

```javascript
while (condicao) {
  declaracao;
}
```

### Exemplo

Vamos declarar uma variável e iniciá-la em 0 para, em seguida, usar o `while` e passar a instrução que, enquanto nossa variável for menor que 11, a multiplicaremos por 5 (resultando na tabuada do 5).

```javascript
let i = 0;

while (i < 11) {
  console.log(`${i} x 5 = ${i * 5}`);
  i++;
}
```

#### 🏋🏽 Bora praticar

Abra o Visual Studio

<details>  
 <summary><b>Pratica: </b>  Faça um programa, utilizando while, que mostre na tela de 0 até 200. </summary>
 
 ```javascript
let n = 200;
while(i < n){
  console.log(i)
  i++;
}
```

</details>

---

# Métodos funcionais em Arrays

## Map

No JavaScript, o método `map()` é uma função de array que permite transformar cada elemento de um array, criando um novo array com os valores resultantes dessa transformação. Ela percorre o array original, aplica uma função de callback a cada elemento e retorna um novo array com os resultados. Esse método é amplamente utilizado para manipulação de dados em arrays, sendo ideal quando queremos transformar ou modificar cada item de um array de maneira consistente.

### Exemplos de uso

#### Exemplo 1: Dobrar os valores de um array

Este exemplo utiliza o `map()` para criar um novo array onde cada elemento é o dobro do valor original.

```javascript
const numeros = [1, 2, 3, 4];
const numerosDobrados = numeros.map((num) => num * 2);

console.log(numerosDobrados); // Saída: [2, 4, 6, 8]
```

#### Exemplo 2: Extrair uma propriedade específica de objetos em um array

Aqui, o `map()` é usado para extrair apenas os nomes de uma lista de objetos.

```javascript
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 20 },
];

const nomes = pessoas.map((pessoa) => pessoa.nome);

console.log(nomes); // Saída: ['Ana', 'João', 'Maria']
```

Esses exemplos mostram como o `map()` pode ser útil para transformar e estruturar dados em arrays de forma prática e eficiente.

## Atividade: Calculando o Preço com Desconto de Produtos

Imagine que você trabalha para um supermercado online e precisa criar uma função para calcular o preço com desconto de uma lista de produtos. Cada produto tem um preço original e, neste mês, o supermercado está oferecendo um desconto de 10% em todos os itens. Sua tarefa é gerar uma lista com os novos preços dos produtos aplicando esse desconto.

#### Requisitos

1. Use o método `map()` para criar um novo array com os preços atualizados.
2. Cada produto possui duas propriedades: `nome` e `precoOriginal`.
3. O desconto é de 10%, ou seja, o preço final será `precoOriginal * 0.9`.

```javascript
const produtos = [
  { nome: "Arroz", precoOriginal: 20 },
  { nome: "Feijão", precoOriginal: 10 },
  { nome: "Macarrão", precoOriginal: 15 },
  { nome: "Óleo", precoOriginal: 12 },
];

// Use o método map() para calcular o preço com desconto
```

#### Saída esperada

```javascript
[
  { nome: "Arroz", precoComDesconto: 18 },
  { nome: "Feijão", precoComDesconto: 9 },
  { nome: "Macarrão", precoComDesconto: 13.5 },
  { nome: "Óleo", precoComDesconto: 10.8 },
];
```
