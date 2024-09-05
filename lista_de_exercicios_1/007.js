// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// const prompt = require('prompt-sync')();

function verDesconto(desconto){
  let TemDesconto = desconto;
  
  let valorComDesconto = 0.25;
  let valorSemDesconto = 0.30;

  if (TemDesconto) {
    valor = numeroMaças * valorComDesconto;
  }else {
    valor = numeroMaças * valorSemDesconto;
  }

  return valor;
  
}

// Ler o número de maçãs compradas
// const numeroMaças = parseInt(prompt("Digite o número de maçãs compradas: "));

function valorDaCompra(numeroMaças) {
  const umaDuzia = 12;
  let valorTotal;
  if (numeroMaças < umaDuzia) {
  valorTotal = verDesconto(false);
  } else {
  valorTotal = verDesconto(true);
  }
  return valorTotal;
}


function valorDaCompra(numeroMaças) {
  const umaDuzia = 12;
  let valorTotal;

  if (numeroMaças < umaDuzia) {
  valorTotal = numeroMaças * 0.30;
  } else {
  valorTotal = numeroMaças * 0.25;
  }
  return valorTotal;
}
// Calcular o valor totalda compra
function compra() {

  let numMaxMaças = 30;
  let quantCompras = 10;
  
  for (let i = 0; i < quantCompras; i++) {
    var numeroMaças = parseInt(1 + Math.random() * numMaxMaças);
    
    var valorTotal = valorDaCompra(numeroMaças);
    text = `O valor total da compra de ${numeroMaças} Maçãs é: R$ ${valorTotal.toFixed(2)}`;
    console.log(text);
  }    

}

compra()


// Escrever o valor total da compra
