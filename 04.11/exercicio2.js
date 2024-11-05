// Imprima os números de 1 até 40 na tela, 
// dizendo se cada um é par ou impar 
// e em seguida, quantos números pares.

// sempre que um numero for divisivel por 2
// ele é par

// % => módulo da divisão 
let contadorPar = 0;
let contadorImpares = 0;

for (let i = 1; i < 212; i++) {
  if (i % 2 === 0) {
    console.log(`${i} é par`);
    contadorPar++;
  } else {
    console.log(`${i} é impar`);
    contadorImpares++;
  }
}

console.log(`Quantidade de pares: ${contadorPar}`);
console.log(`Quantidade de impares: ${contadorImpares}`);

