let canvas = document.getElementById("cobra"); //Aqui irá pegar o ID especifico "cobra" no index
let context = canvas.getContext("2d");//Aqui, o contexto renderiza o desenho dentro do canvas
let pixel = 32; //Aqui representa o número de pixels

let cobra = []; //Aqui será definido a posição da cobra em relação ao fundo
cobra[0] = {

    x: 8 * pixel,
    y: 8 * pixel
    
}; 

let direcao = "direta";

function background(){ //Aqui é onde desenha o canvas

    context.fillStyle = "yellow"; //Aqui está definindo a cor pro fundo
    context.fillRect(0, 0, 16 * pixel, 16 * pixel); //Aqui desenha o retângulo onde vai acontecer o jogo
    //No fillRect iremos trabalhar com quatro parâmetros, posição do; x e y, altura e largura

}

function cobrinha(){

    for(i = 0; i < cobra.length; i++){

        context.fillStyle = "red";
        context.fillRect(cobra[i].x, cobra[i].y, pixel, pixel); //Aqui está mostrando, sob o fundo, a cobrinha.
    
    }
}

document.addEventListener("keydown", update); //Aqui ele está pegando o evento de click (Ele está esperando a ação) e junto está chamando o update.
function update(event){
    
    //Ela só muda se a posição não for contrária a ela.
    if(event.keyCode == 37 && direcao != "direita") direcao = "esquerda"; 
    if(event.keyCode == 38 && direcao != "baixo") direcao = "cima";

    if(event.keyCode == 39 && direcao != "esquerda") direcao = "direta";
    if(event.keyCode == 40 && direcao != "cima") direcao = "baixo";
    //Ao apertar alguma tecla, o event vai chamar a update e logo após irá passar como argumento o evento de tecla setada.

}

function iniciarjogo(){ //Função que irá iniciar e definir o controle do jogo

    //Plano cartesiano para fazer ele retornar após sair da tela.
    if(cobra[0].x > 15 * pixel && direcao == "direta") cobra[0].x = 0;
    if(cobra[0].x < 0 && direcao == "esquerda") cobra[0].x = 16 * pixel;
    
    if(cobra[0].y > 15 * pixel && direcao == "baixo") cobra[0].y = 0;
    if(cobra[0].y < 0 && direcao == "cima") cobra[0].y = 16 * pixel;

    background();
    cobrinha();

    let cobra_X = cobra[0].x;
    let cobra_Y = cobra[0].y;
    
    if(direcao == "direta") cobra_X += pixel;
    if(direcao == "esquerda") cobra_X -= pixel;

    if(direcao == "cima") cobra_Y -= pixel;
    if(direcao == "baixo") cobra_Y += pixel;
    
    cobra.pop();

    let newHead = {
        x: cobra_X,
        y: cobra_Y
    }

    cobra.unshift(newHead);
}

let jogo = setInterval(iniciarjogo, 100); //Intervalo entre os comandos