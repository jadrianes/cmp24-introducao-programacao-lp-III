
/*
1. Um restaurante quer exibir no console um aviso automático 
de contagem regressiva para o horário de fechamento. Eles fecham em 
5 horas. Escreva um loop for que conte de 5 a 1, 
exibindo a mensagem: `"Faltam X horas para o fechamento"`, 
onde X diminui a cada volta do loop.
*/

// Pri
for (let horas = 5; horas > 0; horas--) {
  // console.log(`Faltam ${horas} horas para o fechamento`);
}
// horas--
// horas-=1
// horas = horas - 1

//Jaq
for (let i = 5; i > 0; i--) {
  // console.log(`Faltam ${i} horas para fechar o restaurante.`)
}

// Jess
for (let i = 5; i >= 0; i--) {
  if (i > 0) {
    // console.log(`Faltam ${i} horas para o fechamento.`); // interpolação
  } else {
    // console.log("O restaurante está fechado!");
  }
}
// opção com menos linhas
// for (let i = 5; i > 0; i--) {
//   console.log(`Faltam ${i} horas para o fechamento.`); // interpolação
// }
// console.log("O restaurante está fechado!");


// Juliene
let hora = 5;
for (let hora = 5; hora > 0; hora--) {
  // console.log(`Faltam ${hora} horas para o fechamento.`);
}


let horas = 5;

for (let i = horas; i > 0; i--) {
  // console.log(`Faltam ${i} horas para o fechamento.`);
}


// vamos evitar codigos flecha!
// if (horas <= 8) {
//   console.log(`Faltam ${horas} horas para o fechamento.`);
//   horas--;

//   if (horas <= 8) {
//     console.log(`Faltam ${horas} horas para o fechamento.`);
//     horas--;

//     if (horas <= 8) {
//       console.log(`Faltam ${horas} horas para o fechamento.`);
//       horas--;

//       if (horas <= 8) {
//         console.log(`Faltam ${horas} horas para o fechamento.`);
//         horas--;

//         if (horas <= 8) {
//           console.log(`Faltam ${horas} horas para o fechamento.`);
//           horas--;

//           if (horas <= 8) {
//             console.log(`Faltam ${horas} horas para o fechamento.`);
//             horas--;

//             if (horas <= 8) {
//               console.log(`Faltam ${horas} horas para o fechamento.`);
//               horas--;

//               if (horas <= 8) {
//                 console.log(`Faltam ${horas} horas para o fechamento.`);
//                 horas--;
//               }
//             }
//           }
//         }

//       }
//     }
//   }
// }

