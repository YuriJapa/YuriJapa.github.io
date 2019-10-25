let atropelaVaca = false;
let atropelaTouro = false;

function atropelamento(){
  for(let i = 0; i < imgCarro.length; i++){
    
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 40, 30);
    
    if(atropelaVaca){
      //Vaca atropelada
      yVaca = 367;
      if(placarVaca > 0 )
        placarVaca -= 1;
      atropelou.play();
    }
    
    atropelaTouro = collideRectRect(xTouro, yTouro, 28, 28, xCarro[i], yCarro[i], 40, 30);
    
    if(atropelaTouro){
      //Touro atropelado
      yTouro = 367;
      if(placarTouro > 0)
        placarTouro -= 1;
      atropelou.play();
    }
    
  }//For
}//Atropelamento

