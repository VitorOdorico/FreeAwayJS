let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// ator paramers
let xAtor = 100;
let yAtor = 360;
let larguraAtor = 30;
let alturaAtor = 30;

// carro paramers
let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarro = 2;

// Position cars 1
let xCarro = 600;
let yCarro = 40;

// Position car 2
let xCarro2 = 0;
let yCarro2 = 100;

// Position cars 3
let xCarro3 = 600;
let yCarro3 = 150;

// Position cars 4
let xCarro4 = 600;
let yCarro4 = 215;

// Position cars 5
let xCarro5 = 0;
let yCarro5 = 265;

// Position cars 6
let xCarro6 = 600;
let yCarro6 = 320;


function preload(){
  imagemDaEstrada = loadImage("images/estrada.png")
  imagemDoAtor = loadImage("images/ator-1.png")
  imagemCarro = loadImage("images/carro-1.png")
  imagemCarro2 = loadImage("images/carro-2.png")
  imagemCarro3 = loadImage("images/carro-3.png")
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
  loopCarro();
}

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor,alturaAtor);
}
function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, larguraCarro, alturaCarro);
  image(imagemCarro2, xCarro2, yCarro2, larguraCarro, alturaCarro);
  image(imagemCarro3, xCarro3, yCarro3, larguraCarro, alturaCarro);
  image(imagemCarro2, xCarro4, yCarro4, larguraCarro, alturaCarro);
  image(imagemCarro, xCarro5, yCarro5, larguraCarro, alturaCarro);
  image(imagemCarro3, xCarro6, yCarro6, larguraCarro, alturaCarro);
}




function movimentaCarro(){
  xCarro -= velocidadeCarro +4;
  xCarro2 += velocidadeCarro +4;
  xCarro3 -= velocidadeCarro +1;
  xCarro4 -= velocidadeCarro +2;
  xCarro5 += velocidadeCarro +2;
  xCarro6 -= velocidadeCarro +3;
}







function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  else if(keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
}
function loopCarro(){
  
}

if(xCarro < -30,xCarro2 > 630,xCarro3 < -30,xCarro4 < -30, xCarro5 > 600,xCarro6 < -30){
    xCarro = 600;
    xCarro2 = -20;
    xCarro3 = 6;
    xCarro4 = 6 ;
    xCarro5 = -20;
    xCarro6 = 6;
}
  
  
   