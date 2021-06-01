let canvas = document.getElementById("cobra"); //Aqui irá pegar o ID especifico "cobra" no index
let context = canvas.getContext("2d");//Aqui, o contexto renderiza o desenho dentro do canvas
let box = 32; //Aqui representa o número de pixels

function background(){ //Aqui é onde desenha o canvas
    context.fillStyle = "lightblue"; //Aqui está definindo a cor pro fundo
    context.fillRect(0, 0, 16 * box, 16 * box); //Aqui desenha o retângulo onde vai acontecer o jogo
    //No fillRect iremos trabalhar com quatro parâmetros, posição do; x e y, altura e largura
}

background();