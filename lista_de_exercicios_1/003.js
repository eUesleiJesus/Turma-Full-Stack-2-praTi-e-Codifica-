//  Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

var alunos = ["Tapioca", "Preto", "Todinho", "Chico", "Gatão", "Mingal", "Pudim", "Paçoquinha", "Belinha", "Leite-Moça", "Nina"];
var Aprovado = 7;
var Recuperação = 5;

function obterNotasAleatorias() {
    const notas = [];
    for (let i = 0; i < alunos.length; i++) {
      notas.push(Math.random() * 10); // Gera um número aleatório entre 0 e 10
    }
    return notas;
  }
  
  function classificarNota(nota) {
    if (nota >= Aprovado) {
      return "Aprovado";
    } else if (nota >= Recuperação) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  }
  
  function exibirResultados(notas) {
    notas.forEach((nota, i) => {
      const resultado = classificarNota(nota);
        const aluno = alunos[+i];
      console.log(`Aluno ${aluno}: Nota ${nota.toFixed(2)} - ${resultado}`);
    });
  }
  
  // Chamando as funções
  const notas = obterNotasAleatorias();
  exibirResultados(notas);