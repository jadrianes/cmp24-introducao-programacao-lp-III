# 🔁 Estruturas de Repetição

Estruturas de repetições repetem determinado bloco de comandos enquanto a condição atende ao requisito.</b>

<p align="center">
  <img width="300" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/i18n/pt/Fluxograma_simples.png">
</p>

## for loop

`for` é utilizado quando temos definida a quantidade de iterações de repetições necessárias.

<p align="center">
  <img width="300" src="https://media.tenor.com/Oe-fMIIqnT8AAAAC/loop-infinite.gif">
</p>

Por parâmetro, <b>for</b> recebe três atributos:

```javascript
for ([inicialização]; [condição]; [expressão final]) {
   declaração;
}
```

- Inicialização: é uma expressão ou declaração de variáveis. É usada para iniciar o contador de variáveis.
- Condição: é a expressão que será avaliada antes da iteração do loop. Enquanto a condição for atendida, o seu código será executado.
- Expressão final: é validada ao final de cada iteração que acontece no laço FOR. Utilizada para incrementar ou atualizar a variável.
- Declaração: é o trecho de código que será executado caso a condição seja verdadeira.

### Exemplo

```javascript
for (let i = 0; i < 9; i++) {
  console.log(i);
}
```

### 🏋🏽 Bora praticar

Abra o Visual Studio

  <details>
    <summary> <b>Pratica:</b> inicie a variável <b>i</b> recebendo o valor 0. Enquanto for menor que 11, acrescente mais um número a variável, então imprima na tela (2*i). </summary>

```javascript
for (let i = 0; i < 11; i++) {
  console.log(2 * i);
}
```

</details>

## Desafios

1. Um restaurante quer exibir no console um aviso automático de contagem regressiva para o horário de fechamento. Eles fecham em 5 horas. Escreva um loop for que conte de 5 a 1, exibindo a mensagem: "Faltam X horas para o fechamento", onde X diminui a cada volta do loop.

2. Uma lista de nomes de convidados foi criada para uma festa, e você precisa garantir que todos recebam um convite. Dada a array `const convidados = ["Ana", "Pedro", "Luiza", "João", "Maria"];`, use um loop for para imprimir a mensagem "Convite enviado para [nome]", onde [nome] é o nome de cada convidado.

3. Uma equipe de desenvolvedores precisa corrigir o status de tarefas antigas em um sistema. Dado o array `const tarefas = [{descricao: "Tarefa 1", status: "Incompleta"}, {descricao: "Tarefa 2", status: "Incompleta"}, {descricao: "Tarefa 3", status: "Incompleta"}];`, crie um loop for que altere o status de cada tarefa para "Concluída" e exiba o array atualizado.
