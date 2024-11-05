/*
Uma equipe de desenvolvedores precisa corrigir o 
status de tarefas antigas em um sistema. Dado o 
array 
const tarefas = [
    {descricao: "Tarefa 1", status: "Incompleta"}, 
    {descricao: "Tarefa 2", status: "Incompleta"}, 
    {descricao: "Tarefa 3", status: "Incompleta"}
]; 
crie um loop for que altere o status de cada tarefa para "Concluída" 
e exiba o array atualizado.

*/

// Dica 1: como acessar elementos de um array usando for
const convidados = []
for (let i = 0; i < convidados.length; i++) {
  // console.log(convidados[i]);
}

const pessoa = { nome: 'Ana', idade: 18 }
// Dica bonus: como acesso uma propriedade do objeto?
// console.log(pessoa.idade);

// e como altero o valor?
// objeto.propriedade = "novo valor";
// pessoa.idade = 19;
// console.log(pessoa.idade);


const tarefas = [
  { descricao: "Tarefa 1", status: "Incompleta" },
  { descricao: "Tarefa 2", status: "Incompleta" },
  { descricao: "Tarefa 3", status: "Incompleta" }
];

for (let i = 0; i < tarefas.length; i++) {
  tarefas[i].status = "Completa";
  console.log(`o status da ${tarefas[i].descricao} é ${tarefas[i].status}`);
}