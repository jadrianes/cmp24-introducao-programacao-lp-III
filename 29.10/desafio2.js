const convidados = ["Ana", "João", "Carlos"];


const adicionarConvidado = (convidados, convidado) => {
  // const encontradoNaLista = convidados.includes(convidado);

  const encontradoNaLista = convidados.find((pessoa) => pessoa === convidado);
  const naoEstaConvidado = encontradoNaLista === undefined;
  const estaConvidado = encontradoNaLista !== undefined;

  if (naoEstaConvidado) {
    convidados.push(convidado);
    console.log(`O convidado ${convidado} foi adicionado a lista.`);
  } else {
    console.log(`O convidado ${convidado} já está na lista.`);
  }

  console.log(`Atualmente há ${convidados.length} convidados na lista.\n`);
}

adicionarConvidado(convidados, "Ana");
// Resultado esperado: "A convidada Ana já está na lista."
// Atualmente há 3 convidados na lista.

adicionarConvidado(convidados, "Beatriz");
// Resultado esperado: "A convidada Beatriz foi adicionada na lista."
// Atualmente há 4 convidados na lista.

adicionarConvidado(convidados, "Lis");