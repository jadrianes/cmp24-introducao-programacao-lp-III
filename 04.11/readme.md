# Estrutura de repetição

## 🏃‍♀️ Prática

1. Um restaurante quer exibir no console um aviso automático de contagem regressiva para o horário de fechamento. Eles fecham em 5 horas. Escreva um loop for que conte de 5 a 1, exibindo a mensagem: `"Faltam X horas para o fechamento"`, onde X diminui a cada volta do loop.

2. Imprima os números de 0 até 40 na tela, dizendo se cada um é par ou impar e em seguida, quantos números pares e quantos números ímpares foram impressos.

3. Uma lista de nomes de convidados foi criada para uma festa, e você precisa garantir que todos recebam um convite. Dada a array `const convidados = ["Ana", "Pedro", "Luiza", "João", "Maria"];`, use um loop for para imprimir a mensagem "Convite enviado para [nome]", onde [nome] é o nome de cada convidado.

4. Uma equipe de desenvolvedores precisa corrigir o status de tarefas antigas em um sistema. Dado o array `const tarefas = [{descricao: "Tarefa 1", status: "Incompleta"}, {descricao: "Tarefa 2", status: "Incompleta"}, {descricao: "Tarefa 3", status: "Incompleta"}];`, crie um loop for que altere o status de cada tarefa para "Concluída" e exiba o array atualizado.

5. Escreva um programa em que verifica uma frase e conta o número de vogais (a, e, i, o, u) na frase fornecida

   ```javascript
   const contadorDeVogais = (frase) => {
     // desenvolver o código
   };

   contadorDeFrase("O for é uma estrutura de repetição poderosa.");
   // 19 vogais foram encontradas

   contadorDeFrase("sky sky sky sky");
   // 0 vogais foram encontradas
   ```

6. Usando estrutura de repetição salva uma palavra numa variável e exiba ela de trás para frente. Por exemplo, se a palavra for `quilombola` o programa deve exibir `alobmoliuq`.

   ```javascript
   const inversorDePalavras = (palavra) => {
     // desenvolver o código
   };

   inversorDePalavras("quilombo");
   // obmoliuq

   inversorDePalavras("asa");
   // asa
   ```

## 🔁 while

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
