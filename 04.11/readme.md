# Estrutura de repetição

## 🏃‍♀️ Prática

1. Um restaurante quer exibir no console um aviso automático de contagem regressiva para o horário de fechamento. Eles fecham em 5 horas. Escreva um loop for que conte de 5 a 1, exibindo a mensagem: `"Faltam X horas para o fechamento"`, onde X diminui a cada volta do loop.

2. Imprima os números de 1 até 40 na tela, dizendo se cada um é par ou impar e em seguida, quantos números pares e quantos números ímpares foram impressos.

```javascript
1 é impar
2 é par
3 é impar
(...)

Quantidade de pares: x
Quantidade de impares: y
```

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
