

// const prompt = require('prompt-sync')();

// Ler os lados do triângulo
// const ladoA = parseFloat(prompt("Digite o valor do lado A: "));
// const ladoB = parseFloat(prompt("Digite o valor do lado B: "));
// const ladoC = parseFloat(prompt("Digite o valor do lado C: "));

function gerarLadosTriangulo() {
    var ladoA, ladoB, ladoC;
  
    while (true) {
      ladoA = 1 + Math.random() * 10; // Gera um número entre 1 e 10
      ladoB = 1 + Math.random() * 10;
      ladoC = 1 + Math.random() * 10;
    
      if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        return { ladoA, ladoB, ladoC };
      }else {
        console.log(ladoA.toFixed(4), ladoB.toFixed(4), ladoC.toFixed(4));
        console.log("Os lados fornecidos não formam um triângulo.");
        var lados = gerarLadosTriangulo();
        return lados;
        }
    }
}
  
  // Exemplo de uso:

  var lados = gerarLadosTriangulo();

  var ladoA = lados.ladoA;
  var ladoB = lados.ladoB;
  var ladoC = lados.ladoC;

// Verificar se os lados formam um triângulo
function verificarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
      // Verificar o tipo de triângulo
      if (ladoA === ladoB && ladoB === ladoC) {
        return "Triângulo Equilátero";
      } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Triângulo Isósceles";
      } else {
        return "Triângulo Escaleno";
      }
    } else {
    
          // Repete até que os lados formem um triângulo válido

    }
  }

  function calcularAreaTriangulo(ladoA, ladoB, ladoC) {
    // calcular o semiperímetro
    const s = (ladoA + ladoB + ladoC) / 2;

    // calcular a área usando a fórmula de Herão
    const area = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));
    const text = "A área do triângulo é: " + area.toFixed(4) + " u.a.";
    return text ;
  }

  console.log(ladoA.toFixed(4), ladoB.toFixed(4), ladoC.toFixed(4)); 
  console.log(verificarTriangulo(ladoA, ladoB, ladoC)); 
  console.log(calcularAreaTriangulo(ladoA, ladoB, ladoC));

  