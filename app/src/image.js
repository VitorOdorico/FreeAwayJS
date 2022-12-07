let imagemDoAtor;
let imagemDaEstrada;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// list imagem carros
let imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3];

function preload(){
    imagemDaEstrada = loadImage("images/estrada.png")
    imagemDoAtor = loadImage("images/ator-1.png")
    imagemCarros[0] = loadImage("images/carro-1.png")
    imagemCarros[1] = loadImage("images/carro-2.png")
    imagemCarros[2] = loadImage("images/carro-3.png")
}