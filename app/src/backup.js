

// carro paramers
let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [6,6, 3, 4.7,4,5];

// List Y and X cars positions
let yCarros = [40,100,150,215,265,320];
let xCarros = [600,0,600,600,0,600]


function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  margemBordas();
  verificarColisao();
  placar();
  marcaPontos();
}


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);   
  }
}




function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
    xCarros[3] -= velocidadeCarros[3];
    xCarros[4] -= velocidadeCarros[4];
    xCarros[5] -= velocidadeCarros[5];
}
// loop carro

function voltaPosicaoInicialCarro(){
  if(xCarros[0] < 30){
    xCarros[0] = 600;
  }
  if(xCarros[1] < 30){
    xCarros[1] = 600;
  }
  if(xCarros[2] < -30){
    xCarros[2] = 600;
  }
  if(xCarros[3] < -30){
    xCarros[3] = 600;
  }
  if(xCarros[4] < 30){
    xCarros[4] = 600;
  }
  if(xCarros[5] < -30){
    xCarros[5] = 600;
  }

}



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
