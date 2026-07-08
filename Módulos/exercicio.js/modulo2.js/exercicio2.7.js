const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0];

let soma = 0;
let indice = 0;

while (indice < notas.length) {
  soma += notas[indice];
  indice++;
}

const media = soma / notas.length;

console.log(`Soma total: ${soma}`);
console.log(`Média: ${media}`);