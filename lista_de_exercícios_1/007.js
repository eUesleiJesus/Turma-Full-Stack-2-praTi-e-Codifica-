const prompt = require('prompt-sync')();

// Ler o número de maçãs compradas
const numeroMaças = parseInt(prompt("Digite o número de maçãs compradas: "));

// Calcular o valor total da compra
let valorTotal;

if (numeroMaças < 12) {
  valorTotal = numeroMaças * 0.30;
} else {
  valorTotal = numeroMaças * 0.25;
}

// Escrever o valor total da compra
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);