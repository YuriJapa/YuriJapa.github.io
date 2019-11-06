let tocouMeuJogador = false;
let tocouJogadorOponente = false;

//dimensões da tela
let alturaTela = 400;
let larguraTela = 600;
let metadeTela = larguraTela/2;

//atores
let imgCampo;
let imgMeujogador;
let imgJogadorOponente;
let imgVencedor;

//Variáveis em Javascript da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeX = 5;
let velocidadeY = 5;
let raio = diametro / 2;
let aumentoVelocidade = 0.3;


//Variáveis das raquetes
let velocidadeRaquete = 20;
let alturaRaquete = 190;
let larguraRaquete = 10;

let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete/2.2;

let xRaqueteOponente = 0;
let yRaqueteOponente = alturaTela/2 - alturaRaquete/2.2;


//Variáveis dos Jogadores
let velocidadeJogador = 20;
let alturaJogador = 100;
let larguraJogador = 80;

//Variáveis dos Jogadores
let velocidadeJogador2 = 20;
let alturaJogador2 = 100;
let larguraJogador2 = 80;

let xMeuJogador = larguraTela - larguraJogador;
let yMeuJogador = alturaTela/2 - larguraJogador/1;

let xJogadorOponente = 0;
let yJogadorOponente = alturaTela/2 - larguraJogador/1;

//Placar
let meuPlacar = 0;
let placarOponente = 0;

function preload(){
  imgCampo = loadImage('Imagens/campo.png');
  imgMeujogador = loadImage('Imagens/MeuJogador.png');
  imgJogadorOponente = loadImage('Imagens/JogadorOponente.png');
  imgVencedor = loadImage('Imagens/trofeujogador1.jpg');
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura = "+largura);
  console.log("Altura = "+altura);
}

//Um looping sempre, desenha o que tem dentro
function draw() {
  background(imgCampo);    
  stroke(255);
  strokeWeight(2);
  line(metadeTela,0,metadeTela,alturaTela);
  if(frameCount < 200) //10 segundos
    telaInicial();
  else
    jogar();  
}// Fim da função Draw

function telaInicial(){
  background("deepSkyBlue");
  textStyle(BOLD);
  textAlign(CENTER);
  fill('Black');
  textSize(48);
  text("FIFA s19", 300, 190);
  textSize(24);
  text("Criado por Gustavo C, Nicollas, Vitor e Yuri", 300,230);
  textSize(20);
  text("Linguagem Programação Web", 300,270);
  textSize(20);
  text("Profº Tarcisio Nunes", 300,290);
}

function jogar(){
  if(meuPlacar < 5 && placarOponente < 5){
    mostraBolinha();
    movimentaBolinha();
    detectaColisao();
    mostraRaquetes();
    mostraJogador();
    movimentaMeuJogador();
    movimentaJogadorOponente();
    detectaColisaoBolinhaRaquetes();
    detectaColisaoBolinhaJogador();
    mostraPlacar();
  }  else{
    //Verifica e mostra campeão
    if(meuPlacar == 5)
      setasVenceu();
    else
      letrasVenceu();    
  }
}

function letrasVenceu(){
  fill("red");
  rect(0,0,metadeTela,alturaTela);
  textSize(30);
  fill("black");
  textAlign(CENTER);
  text("Neymar Jr. venceu",metadeTela/2, alturaTela/2);
  
}
function setasVenceu(){
    fill("blue");
  rect(metadeTela,0,larguraTela,alturaTela);
  textSize(30);
  fill("black");
  textAlign(CENTER);
  text("Ronaldinho venceu",metadeTela+metadeTela/2  ,altura/2);
  
}

function mostraPlacar(){
  textSize(30);
  
  fill("blue");
  text(meuPlacar, 3/4* larguraTela, 30);
  
  fill("Red");
  text(placarOponente, larguraTela/4, 30);
    
}

function detectaColisaoBolinhaRaquetes(){  
  //Colisão com a MinhaRaquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete,yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha , yBolinha, diametro);
  
      
  if(tocouMinhaRaquete){
    //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX > 0){
        velocidadeX *= -1;
      placarOponente += 1;
  }
 }
  //Colisão com a Raquete do Oponente
  tocouRaqueteOponente = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  
    
   if(tocouRaqueteOponente){
    //Impede gol contra
    if(xBolinha < metadeTela && velocidadeX < 0){
        velocidadeX *= -1;
      
      meuPlacar += 1;
    }
  } 
}

//Detecta Colisão Jogador
function detectaColisaoBolinhaJogador(){  
  //Colisão meu Jogador
  tocouMeuJogador = collideRectCircle(xMeuJogador,yMeuJogador, larguraJogador, alturaJogador, xBolinha , yBolinha, diametro);
  
      
  if(tocouMeuJogador){//Azul
    //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX > 0){
        velocidadeX = 8;
        if(velocidadeY <= 0 )
          velocidadeY = random(-5, 5);
        velocidadeX *= -1;
  }
}
  //Colisão com a Jogador do Oponente
  tocouJogadorOponente = collideRectCircle(xJogadorOponente, yJogadorOponente, larguraJogador, alturaJogador, xBolinha, yBolinha, diametro);
    
   if(tocouJogadorOponente){//Vermelho
    //Impede gol contra
    if(xBolinha < metadeTela && velocidadeX < 0){      
         velocidadeX = -8;
        
          velocidadeY = random(-5, 5);
        velocidadeX *= -1;
    }
  } 
}


function movimentaJogadorOponente(){

  if(keyIsDown(87)){//W Para cima
    if(yJogadorOponente > 0)//Teto
      yJogadorOponente -= velocidadeJogador;
  }
  if(keyIsDown(83)){//S Para baixo
    if(yJogadorOponente < (alturaTela - alturaJogador + 1))//Chão
      yJogadorOponente += velocidadeJogador;
  }
  if(keyIsDown(65)){//A Para esquerda
    if(xJogadorOponente > 0)//Parede esquerda
      xJogadorOponente -= velocidadeJogador;
  }
  if(keyIsDown(68)){// D Para direita
    if(xJogadorOponente < (metadeTela - larguraJogador - 2))//Parede direita
      xJogadorOponente += velocidadeJogador;
  }
}

function movimentaMeuJogador(){
  //console.log("y: " + yMeuJogador);
  //console.log("x: "+ xMeuJogador);
  if(keyIsDown(UP_ARROW)){//Para cima
    if(yMeuJogador > 0)//Teto
      yMeuJogador -= velocidadeJogador;
  }
  if(keyIsDown(DOWN_ARROW)){//Para baixo
    if(yMeuJogador < (alturaTela - alturaJogador + 1))//Chão
      yMeuJogador += velocidadeJogador;
  }
  if(keyIsDown(LEFT_ARROW)){//Para esquerda
    if(xMeuJogador > metadeTela)//Parede esquerda
      xMeuJogador -= velocidadeJogador;
  }
  if(keyIsDown(RIGHT_ARROW)){//Para direita
    if(xMeuJogador < (larguraTela - larguraJogador))//Parede direita
      xMeuJogador += 10;
  }
}

function mostraJogador(){
  image(imgMeujogador, xMeuJogador ,yMeuJogador, alturaJogador, larguraJogador);
  image(imgJogadorOponente, xJogadorOponente ,yJogadorOponente, alturaJogador2, larguraJogador2);}


function mostraRaquetes(){
  fill("Blue");
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  
  fill("Red");
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function mostraBolinha(){
  fill("White");
  noStroke();
  circle(xBolinha,yBolinha,diametro);
}//Fim mostra Bolinha

function movimentaBolinha(){
  if(velocidadeX > 0)
    velocidadeX -= 0.03;
  else
    velocidadeX += 0.03;
  
  if(velocidadeY > 0)
    velocidadeY -= 0.03;
  else
    velocidadeY += 0.03;
  
  
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
  
      
}//Fim movimenta Bolinha

function detectaColisao(){
  // Colisão com as Bordas Laterais
  
  //Lado direito - Meu Lado
  if(xBolinha  + raio >= largura){       
    velocidadeX *= -1;//velocidade * (-1)    
    //placarOponente += 0;

    velocidadeX -= aumentoVelocidade;
    velocidadeY -= aumentoVelocidade;
   
  }  
  //Lado esquerdo - Lado do Oponente
  if(xBolinha - raio <= 0){
    velocidadeX *= -1;//velocidade * (-1)    
    //meuPlacar += 0;

    velocidadeX += aumentoVelocidade;
    velocidadeY += aumentoVelocidade;
   
  }

  //Colisão com as bordas superior e inferior
  if(yBolinha + raio >= altura || 
     yBolinha - raio <= 0){
     velocidadeY *= -1;
  }
} //Fim detecta colisão