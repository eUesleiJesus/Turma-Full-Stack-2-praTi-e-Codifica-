const prompt = require('prompt-sync')();

var temEspada = false;
var truqueDoSaci = false;

function exibirMenu() {
  console.log("\nEscolha uma aventura:");
  console.log("1. A Caverna Misteriosa");
  console.log("2. Fuga do Vampiro Careca");
  console.log("3. A Floresta misteriosa");
  console.log("0. Sair");
}

function aventuraCaverna() {
  console.log("\nVocê está em uma caverna escura e úmida. Uma criatura horrível se aproxima!");
  console.log("O que você faz?");
  console.log("1. Fugir correndo");
  console.log("2. Sacar sua espada e correr em direção à criatura");
  console.log("3. Lançar uma bola de fogo");

  const escolha = parseInt(prompt("Digite sua escolha:"));
  switch (escolha) {
    case 1:
      console.log("\nVocê tropeça e cai enquanto foge. A criatura o alcança e... você morre!");
      break;
    case 2:
      if (temEspada) {
        console.log("\nVocê ataca a criatura com sua espada! ..."); 
        // ... (lógica diferente se tiver espada)
    } else {
        console.log("\nVocê corre bravamente em direção à criatura, mas ela é muito rápida e forte. Você é devorado!");
    }      break;
    case 3:
      console.log("\nVocê lança uma bola de fogo! A criatura grita de dor e foge da caverna. Você sobreviveu!");
      break;
    default:
      console.log("\nEscolha inválida.");
  }
}

function aventuraVampiro() {
  console.log("\nUm vampiro careca está te perseguindo! Você precisa escapar!");
  console.log("O que você faz?");
  console.log("1. Entrar na porta à direita com um X");
  console.log("2. Correr em direção ao corredor à esquerda");
  console.log("3. Correr em direção ao sol");

  const escolha = parseInt(prompt("Digite sua escolha:"));
  switch (escolha) {
    case 1:
      console.log("\nVocê entra na porta e se depara com uma armadilha mortal. Você morre!");
      break;
    case 2:
      console.log("\nVocê corre pelo corredor, mas é um beco sem saída. O vampiro o alcança e... você morre!");
      break;
    case 3:
      console.log("\nVocê corre em direção ao sol. O vampiro grita de dor e se desfaz em pó! Você sobreviveu! você vê uma espada reluzente caida no chão, ao pega-la você sente raios e faiscas saindo de toda a lamina.");
      temEspada = true;
      break;
    default:
      console.log("\nEscolha inválida.");
  }
}

function aventuraFloresta() {

  if (truqueDoSaci) {
    console.log("\nVocê se lembra do truque do Saci! Você pode usá-lo para... sumir com um item!");
  }else{

  console.log("\nVocê se encontra em uma floresta misteriosa. De repente, em meio a um rodamoinho você avista o Saci!");
  console.log("O que você faz?");
  console.log("1. Correr atrás do Saci");
  console.log("2. Correr do Saci em direção ao mato");
  console.log("3. Oferecer um prato de cuzvuz ao Saci"); 

  }

  const escolha = parseInt(prompt("Digite sua escolha:"));
 

  switch (escolha) {
   
    case 1:
      console.log("\nVocê corre atrás do Saci, mas ele se transforma em um redemoinho de vento e você fica perdido na floresta!");
      break;
    case 2:
      console.log("\nVocê corre do Saci em direção ao mato, mas tropeça e cai, um redemoinho passa por você, você percebe que perdeu todos os seus pertences!");
      break;
    case 3:
      console.log("\nVocê oferece um prato de cuzcuz ao Saci. Ele sorri, aceita o presente e, em troca, te ensina um truque da floresta! Você aprendeu o truque do saci, você pode sumir permanentemente com um item uma única vez.");
      truqueDoSaci = true;
      break;
    default:
      console.log("\nEscolha inválida.");
      }
    }
  



function iniciarJogo() {
  let escolha;

  do {
    exibirMenu();
    escolha = parseInt(prompt("Digite sua escolha:"));

    switch (escolha) {
      case 1:
        aventuraCaverna();
        break;
      case 2:
        aventuraVampiro();
        break;
      case 3:
        aventuraFloresta();
        break;
      case 0:
        console.log("\nObrigado por jogar!");
        break;
      default:
        console.log("\nEscolha inválida.");
    }
  } while (escolha !== 0);
}

iniciarJogo();

/*/*


function lidarComCombate(inimigo, opcoes) {

}

function explorarCaverna() {
     }

    if (/* condição para encontrar o monstro *) {
        lidarComCombate("Criatura Horrível", ["Fugir", "Atacar", "Lançar Bola de Fogo"]); 
    }
}

function aventuraCaverna() {
    explorarCaverna();
    maisfunções();
}

/*/