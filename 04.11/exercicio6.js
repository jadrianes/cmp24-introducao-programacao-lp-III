// const inversorDePalavras = (palavra) => {
//   //to do
// };

// inversorDePalavras("quilombo");
// // obmoliuq

// inversorDePalavras("asa");
// // asa


// dicas
// como eu acesso a posição de uma letra na palavra
const palavra = "Quilombo";
// console.log(palavra[7] + palavra[6] + palavra[5] + palavra[4] + palavra[3] + palavra[2] + palavra[1] + palavra[0])


// Michele 
const inversorDePalavras = (palavra) => {
  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
    console.log('Posição ' + i);
    palavraInvertida += palavra[i];
    // console.log(palavraInvertida)
  }

  console.log(palavraInvertida);

  // outras formas de pensar 
  // for (let i = 1; i <= palavra.length; i++) {
  // console.log('Posição ' + (palavra.length - i));
  // palavraInvertida += palavra[palavra.length - i]
  // console.log(palavraInvertida)
  // }

};

inversorDePalavras("quilombo");
// inversorDePalavras("asa");
// inversorDePalavras("Minas Programam");

const funcaoReplace = (palavra) => {
  console.log(palavra.split('').reverse().join().replaceAll(",", ""));
}
// funcaoReplace("quilombo")