// ator paramers
let xAtor = 100;
let yAtor = 360;
let larguraAtor = 30;
let alturaAtor = 30;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, larguraAtor,alturaAtor);
}


function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 2;
    }
    else if(keyIsDown(DOWN_ARROW)){
        yAtor += 2;
    }
}