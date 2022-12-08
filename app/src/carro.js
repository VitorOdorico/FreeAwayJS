// carro paramers
let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [6,6, 3, 4.7,4,5];

// List Y and X cars positions
let yCarros = [40,100,150,215,265,320];
let xCarros = [600,0,600,600,0,600]

// unit cars
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);   
  }
}
  
  
// moviment to car
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
  
  