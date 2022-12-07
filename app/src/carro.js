// carro paramers

let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarro = 2;


// Position cars 1
let xCarro = 600;
let yCarro = 40;

// Position cars 2
let xCarro2 = 600;
let yCarro2 = 40;

// Position cars 3
let xCarro3 = 600;
let yCarro3 = 40;


function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, larguraCarro, alturaCarro);
}

function mostraCarro2(){
    image(imagemCarro2, xCarro2, yCarro2, larguraCarro, alturaCarro);
}
function mostraCarro3(){
    image(imagemCarro3, xCarro3, yCarro3, larguraCarro, alturaCarro);
}
  
function movimentaCarro(){
    xCarro -= velocidadeCarro;
}
  
function loopCarro(){

}
