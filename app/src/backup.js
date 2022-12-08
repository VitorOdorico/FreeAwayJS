let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;




// list imagem carros
let imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro4,imagemCarro5,imagemCarro6];

// ator paramers
let xAtor = 243;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

// carro paramers
let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [6,6, 3, 4.7,4,5];

// List Y and X cars positions
let yCarros = [40,100,150,215,265,320];
let xCarros = [600,0,600,600,0,600]

function preload(){
  imagemDaEstrada = loadImage("images/estrada.png")
  imagemDoAtor = loadImage("images/ator-1.png")
  imagemCarros[0] = loadImage("images/carro-1.png")
  imagemCarros[1] = loadImage("images/carro-2.png")
  imagemCarros[2] = loadImage("images/carro-3.png")
  imagemCarros[3] = loadImage("images/carro-2.png")
  imagemCarros[4] = loadImage("images/carro-1.png")
  imagemCarros[5] = loadImage("images/carro-3.png")
}

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

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor,alturaAtor);
}
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);   
  }
}




function movimentaCarro(){

//     for(let i = 0;i < imagemCarros.length; i + 1){
//      xCarros[i] -= velocidadeCarros[i];
      
//     }
    

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
