function verificarColisao(){
    for(let i = 0;i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i],yCarros[i],50,40,xAtor,yAtor,15)
      if(colisao){
         // yAtor = 500
        xAtor = 243;
        yAtor = 366;
      }
    }
  }
  
  
  let meusPontos = 0;
  function placar(){
    textSize(30)
    fill(color(255,255,0))
    text(meusPontos, 100,28)  
  }
  
  function marcaPontos(){
    if(yAtor < 2.8){
      meusPontos += 1;
    }
    if(colisao){
      if(meusPontos > 0 ){
        meusPontos -= 1;
      }
    }
      
  }