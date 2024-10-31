// push
const frutas = ["laranja", "melão", "manga"];
frutas.push("mamão");
// console.log(frutas);

// unshift
const legumes = ["xuxu", "cenoura"];
legumes.unshift("abobrinha");
// console.log(legumes);

// pop
const viciosAlimenticios = ["sorvete", "chocolate", "bolo"];
viciosAlimenticios.pop();
// console.log(viciosAlimenticios);

// shift
const profasLP = ["Lis", "May", "Jess"];
profasLP.shift();
// console.log(profasLP);

// find e findIndex
const alunas = ["Jack", "Jess", "Andressa"];
// const resultadoFind = alunas.find((el) => el === 'Jess');
const resultadoFind = alunas.find((el) => {
  // console.log('O elemento do momento é ' + el)
  return el === 'Jess'
});
const resultadoFindIndex = alunas.findIndex((el) => el === 'Andre');
// console.log(resultadoFindIndex);

// includes
const animaisEstimacao = ["Cachorro", "Gato", "Bodim"];
const resultadoIncludes = animaisEstimacao.includes("Onça pintada");
// console.log(resultadoIncludes)

// sort
// console.log(animaisEstimacao.sort());
const numeros = [4, 2, 10, 6, 1, 9];
console.log(numeros.sort((el1, el2) => el1 - el2));