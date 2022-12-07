function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  mostraCarro2();
  mostraCarro3();
  movimentaCarro();
  movimentaAtor();
  loopCarro();
}