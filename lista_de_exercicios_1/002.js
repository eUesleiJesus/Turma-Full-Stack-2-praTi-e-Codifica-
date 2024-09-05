// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
var quant = 10;
var quantmax = 125;
var criança = 12;
var adolescente = 18;
var adulto = 60;


function gerarIdadesAleatorias() {
    const idades = [];
    for (let i = 0; i < quant; i++) {
        if (!idades.includes(idades))
        idades.push(Math.floor(Math.random() * quantmax)); // Gera um número aleatório entre 0 e 120 (inclusive)
    }
    return idades;
  }
  
  function classificarIdade(idade) {
    if (idade < criança) {
      return "Criança";
    } else if (idade < adolescente) {
      return "Adolescente";
    } else if (idade < adulto) {
      return "Adulto";
    } else {
      return "Idoso";
    }
  }
  
  // Gerar as idades aleatórias
  const idadesAleatorias = gerarIdadesAleatorias();
  
  // Classificar cada idade e exibir o resultado
  idadesAleatorias.forEach(idade => {
    const categoria = classificarIdade(idade);
    console.log(`A pessoa com ${idade} anos é classificada como ${categoria}.`);
  });