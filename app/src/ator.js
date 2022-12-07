// ator paramers
let xAtor = 250;
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

function Win (){
    if(yAtor < 0){
        yAtor = 366;
    }
}