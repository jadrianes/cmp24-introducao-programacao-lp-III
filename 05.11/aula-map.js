
// Aula sobre whuile
// for (let contador = 0; contador < 11; contador++) { }

// for (let contador = 0; contador < 11; contador++) {
//   console.log(5 * contador);
// }

// let contador = 0;
// while (contador <= 10) {
//   console.log(5 * contador);
//   contador++;
// }

// let idadeUsuario = prompt('Digite sua idade');

// while (idadeUsuario < 18) {
//   idadeUsuario = prompt('Digite sua idade');
// }

// alert("Bem vinde ao site, pode entrar!");

// let idadeUsuario = prompt('Digite sua idade');

// for(;idadeUsuario<18;){
//     idadeUsuario = prompt('Digite sua idade');
// }

// alert("Bem vinde ao site, pode entrar!");

// Aula de Array

const numeros = [1, 2, 3, 4];
const numerosDobrados = [];

for (let i = 0; i < numeros.length; i++) {
  numerosDobrados.push(numeros[i] * 2)
}
// console.log(numerosDobrados);

// console.log(numeros)
const numerosDobradosMap = numeros.map((valorAtual) => valorAtual * 2);
// console.log(numerosDobradosMap)

const numerosExpMap = numeros.map((valorAtual) => valorAtual * valorAtual);
// console.log(numerosExpMap)


const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 20 },
];

const nomes = pessoas.map((pessoa) => pessoa.nome);

console.log(nomes); // Saída: ['Ana', 'João', 'Maria']