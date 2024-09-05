//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.


//const prompt = require('prompt-sync')();
const baixoPeso = 18.5;
const pesoNormal = 25;
const sobrepeso = 30;

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function determinarCategoria(imc) {
  if (imc < baixoPeso) {
    return "Baixo peso";
  } else if (imc >= baixoPeso && imc < pesoNormal) {
    return "Peso normal";
  } else if (imc >= pesoNormal && imc < sobrepeso) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}

// Obter o peso e a altura do usuário
// const peso = parseFloat(prompt("Digite seu peso em kg: "));
// const altura = parseFloat(prompt("Digite sua altura em metros: "));
// const imc = calcularIMC(peso, altura);


// Calcular o IMC

function gerarPessoaAleatoria() {
    const altura = 1.4 + Math.random() * 0.5;
    const peso = 40 + Math.random() * 50.0;
  
    return { altura, peso };
    }

  const pessoa = gerarPessoaAleatoria();
  const imc = calcularIMC(pessoa.peso, pessoa.altura);


// Determinar a categoria de peso
const categoria = determinarCategoria(imc);


// Mostrar o resultado
console.log(pessoa.altura.toFixed(2) + "m :Altura | " + pessoa.peso.toFixed(2) + "kg :Peso");
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Sua categoria de peso é: ${categoria}`); 

