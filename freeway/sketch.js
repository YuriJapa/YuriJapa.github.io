function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.2);
  //trilha.loop();
}

function draw(){
  if(frameCount > 400){ // +/= 8s
    if(placarVaca <= 5 && placarTouro <= 5)
    jogar();
    else
      verificaVencedor();
  }else{
    telaInicial();
  }
}

function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora(); //Tela Final
  else
    touroVencedor(); //Tela Final
}

function vacaVencedora(){
  vitoria.play();
  background("Cian");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Black");
  textSize(45);
  text("Vaca Venceu" ,300, 190);
  image(imgVaca, 300, 200, 200, 200);
}

function touroVencedor(){
  vitoria.play();
  background("Turquoise");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("MediumBlue");
  textSize(45);
  text("Touro Venceu" ,300, 190);
  image(imgTouro, 300, 200, 200, 200);
}


function telaInicial(){
  background("Red");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("DeepSkyBlue");
  textSize(45);
  text("Jogo da 1º de Maio",300, 190);
  textSize(24);
  text("Desenvolvido por Japa",300, 230);
}

function jogar(){
  background(imgEstrada);
  movimentarTouro();
  mostarTouro();
  movimentarVaca();
  mostarVaca();
  mostraCarros();
  movimentaCarrosD();
  mostraPlacar();
  pontuar();
  atropelamento();
}