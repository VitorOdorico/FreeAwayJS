// carro paramers
let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarro = 2;

// List Y and X cars positions
let yCarros = [40,100,150,215,265,320];
let xCarros = [600,0,600,600,0,600]

// unit cars

function mostraCarro(){
    image(imagemCarros[0], xCarros[0], yCarros[0], larguraCarro, alturaCarro);
    image(imagemCarros[1], xCarros[1], yCarros[1], larguraCarro, alturaCarro);
    image(imagemCarros[2], xCarros[2], yCarros[2], larguraCarro, alturaCarro);
    image(imagemCarros[1], xCarros[3], yCarros[3], larguraCarro, alturaCarro);
    image(imagemCarros[0], xCarros[4], yCarros[4], larguraCarro, alturaCarro);
    image(imagemCarros[2], xCarros[5], yCarros[5], larguraCarro, alturaCarro);
}
  
  
// moviment to car
  
function movimentaCarro(){
    xCarros[0] -= velocidadeCarro +4;
    xCarros[1] += velocidadeCarro +4;
    xCarros[2] -= velocidadeCarro +1;
    xCarros[3] -= velocidadeCarro +2.7;
    xCarros[4] += velocidadeCarro +2;
    xCarros[5] -= velocidadeCarro +3;
}
// loop carro
  
function voltaPosicaoInicialCarro(){
    if(xCarros[0] < -30){
      xCarros[0] = 600;
    }
    if(xCarros[1] > 630){
      xCarros[1] = -20;
    }
    if(xCarros[2] < -30){
      xCarros[2] = 600;
    }
    if(xCarros[3] < -30){
      xCarros[3] = 600;
    }
    if(xCarros[4] > 600){
      xCarros[4] = -20;
    }
    if(xCarros[5] < -30){
      xCarros[5] = 600;
    }
  
}
  
  