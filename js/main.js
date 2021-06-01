let canvas = document.getElementById("cobra"); //Aqui irá pegar o ID especifico "cobra" no index
let context = canvas.getContext("2d");//Aqui, o contexto renderiza o desenho dentro do canvas
let pixel = 32; //Aqui representa o número de pixels

let cobra = [];
cobra[0] = {
    x: 8 * pixel,
    y: 8 * pixel
};

function background(){ //Aqui é onde desenha o canvas
    context.fillStyle = "yellow"; //Aqui está definindo a cor pro fundo
    context.fillRect(0, 0, 16 * pixel, 16 * pixel); //Aqui desenha o retângulo onde vai acontecer o jogo
    //No fillRect iremos trabalhar com quatro parâmetros, posição do; x e y, altura e largura
}

function cobrinha(){
    for(i = 0; i < cobra.length; i++){
        context.fillStyle = "red";
        context.fillRect(cobra[i].x, cobra[i].y, pixel, pixel);
    }
}

background();
cobrinha();