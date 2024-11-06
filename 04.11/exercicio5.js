const contadorDeVogais = (frase) => {
  let contadorDeVogais = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
      // if (['a', 'e', 'i', 'o', 'u'].includes(frase[i])) {
      contadorDeVogais++;
    }
  }

  console.log(`A frase "${frase}" tem ${contadorDeVogais} vogais.`);
};

contadorDeVogais("O for é uma estrutura de repetição poderosa.");
// 16 vogais foram encontradas

contadorDeVogais("sky sky sky sky");
// 0 vogais foram encontradas