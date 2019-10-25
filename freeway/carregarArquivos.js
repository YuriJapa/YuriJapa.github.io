function preload(){
 imgEstrada = loadImage('imagens/estrada.png');
 imgTouro = loadImage('imagens/ator-1.png');
 imgVaca = loadImage('imagens/ator-2.png');

 imgCarro[0] = loadImage('imagens/carro-1.png');
 imgCarro[1] = loadImage('imagens/carro-2.png');
 imgCarro[2] = loadImage('imagens/carro-3.png');
  
 imgCarro[3] = loadImage('imagens/carro-4.png');
 imgCarro[4] = loadImage('imagens/carro-5.png');
 imgCarro[5] = loadImage('imagens/carro-6.png');

//Sons
  ponto = loadSound('sons/pontos.wav');
  atropelou = loadSound('sons/colidiu.mp3');
  trilha = loadSound('sons/trilha.mp3');
}

//Variáveis para as imagens
let imgEstrada;
let imgTouro;
let imgCarro = [];
let imgVaca;

//Variáveis de movimento
let yVaca = 368;
let xVaca = 450;

let yTouro = 368;
let xTouro = 150;

//Dimensões da Tela
let larguraTela = 600;
let metadeTela =larguraTela/2;

//Placar
let placarVaca = 0;
let placarTouro = 0;

//            Direita     /    Esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 330];
let velocidadeCarro = [6, 7, 8, 6, 7, 8];
