function mostraPlacar(){
  textSize(30);
  
  fill("Green");
  text(placarVaca, 3/4 * larguraTela, 30);
  
  fill("Blue");
  text(placarTouro, larguraTela/4, 30);
}

function pontuar(){
  if(yVaca < 5) {
    placarVaca += 1;
    ponto.play();
    yVaca = 368;
  }
  if(yTouro < 5) {
    placarTouro += 1;
    ponto.play();
    yTouro = 368;
  }
}