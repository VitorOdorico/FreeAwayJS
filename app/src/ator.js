
// ator paramers
let xAtor = 243;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, larguraAtor,alturaAtor);
  }

  function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 4;
    }
    else if(keyIsDown(DOWN_ARROW)){
      yAtor += 4;
    }
    else if(keyIsDown(LEFT_ARROW)){
      xAtor -= 4;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      xAtor += 4;
    }
  }
  // reset position
  function margemBordas (){
    if(yAtor < 2){
      yAtor = 366;
      xAtor = 243;
    }
    if(yAtor > 400){
      yAtor = 366;
     
    }
    if(xAtor < 2){
      xAtor = 2;
    }
    if(xAtor > 470){
      xAtor = 470;
    }
  }
  

function Win (){
    if(yAtor < 0){
        yAtor = 366;
    }
}