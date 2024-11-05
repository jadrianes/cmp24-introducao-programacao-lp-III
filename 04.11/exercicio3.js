/*
Uma lista de nomes de convidados foi criada para uma festa, 
e você precisa garantir que todos recebam um convite. 
Dada a array 
const convidados = ["Ana", "Pedro", "Luiza", "João", "Maria"];, 
use um loop for para imprimir a mensagem "Convite enviado para [nome]"
onde [nome] é o nome de cada convidado.
*/

const convidados = ["Ana", "Pedro", "Luiza", "João", "Maria"];
// dica 1: como acessamos um elemento do array pelo indice
// console.log(convidados[0])
// console.log(convidados[1])
// console.log(convidados[2])
// console.log(convidados[3])
// console.log(convidados[4])

// dica 2: sabemos percorrer de 0 a 4 usando o for
for (let i = 0; i < 5; i++) {
  // console.log(i)
}

// solução
convidados.push("Lis");
convidados.push("Elis");
// for (let i = 0; i < 5; i++) {
// console.log("Convite enviado para " + convidados[i]);
// }
convidados.push("Jess");
convidados.push("Lari");
convidados.push("Michelle");
convidados.push("Pri");

for (let i = 0; i < convidados.length; i++) {
  console.log("Convite enviado para " + convidados[i]);
}
