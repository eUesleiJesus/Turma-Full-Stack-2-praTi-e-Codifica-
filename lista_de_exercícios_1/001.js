/// 001 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if



// função para verificar se um número é par ou ímpar

function verificarParImpar(num) {
    if (num % 2 === 0) {
      console.log(num + " é um número par.");
    } else {
      console.log(num + " é um número ímpar.");
    }
  }
  
  
  // Função para gerar uma sequência de números aleatórios

  var quant = 100;
  var quantmax = 1000;

  function gerarSequenciaAleatoria() {
    let seq = [];
    for (let i = 0; i < quant; i++) {
      let numeroAleatorio = Math.floor(Math.random() * quantmax) + 1;
      if (!seq.includes(numeroAleatorio)) { // Verifica se o número já está na sequência
      seq.push(numeroAleatorio);
    }
}
    return seq;
  }
  
  // Gerar a sequência de números aleatórios
  let numerosAleatorios = gerarSequenciaAleatoria();
  
  // Verificar se cada número da sequência é par ou ímpar
  for (let i = 0; i < numerosAleatorios.length; i++) {
    verificarParImpar(numerosAleatorios[i]);
  } 