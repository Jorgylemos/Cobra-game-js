let canvas = document.getElementById("cobra"); //Aqui irá pegar o ID especifico "cobra" no index
let context = canvas.getContext("2d");//Aqui, o contexto renderiza o desenho dentro do canvas
let pixel = 32; //Aqui representa o número de pixels
let score = 0
let audio = new Audio("sound.mp3");
let foia_audio = new Audio("foia_sound.mp3");

document.getElementById("reset").onclick = function() {
    document.location.reload(true);
}

document.getElementById("musica").onclick = function() {
    foia_audio.play();
}


let cobra = []; //Aqui será definido a posição da cobra em relação ao fundo
cobra[0] = {

    x: 8 * pixel,
    y: 8 * pixel
    
}; 

let direcao = "direta";

//Aqui fará com que o elemento apareça aleatoriamente na cena.
let alimento = {

    //O Math.floor retira a parte flutuante do .random. O math.random retornará sempre um número aleatório até 1. O math.floor retira o decimal.
    x: Math.floor(Math.random() * 15 + 1) * pixel,
    y: Math.floor(Math.random() * 15 + 1) * pixel
    
};

let objetos = {
    objeto1: {
        x: Math.floor(Math.random() * 15 + 1) * pixel,
        y: Math.floor(Math.random() * 15 + 1) * pixel
    },
    objeto2: {
        x: Math.floor(Math.random() * 15 + 1) * pixel,
        y: Math.floor(Math.random() * 15 + 1) * pixel
    },
    objeto3: {
        x: Math.floor(Math.random() * 15 + 1) * pixel,
        y: Math.floor(Math.random() * 15 + 1) * pixel
    },
    objeto4: {
        x: Math.floor(Math.random() * 15 + 1) * pixel,
        y: Math.floor(Math.random() * 15 + 1) * pixel
    }
}

/* 
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

function background(){ //Aqui é onde desenha o canvas.

    context.fillStyle = "yellow"; //Aqui está definindo a cor pro fundo.
    context.fillRect(0, 0, 16 * pixel, 16 * pixel); //Aqui desenha o retângulo onde vai acontecer o jogo.
    //No fillRect iremos trabalhar com quatro parâmetros, posição do; x e y, altura e largura.

};

function cobrinha(){

    for(i = 0; i < cobra.length; i++){

        context.fillStyle = "red";
        context.fillRect(cobra[i].x, cobra[i].y, pixel, pixel); //Aqui está mostrando, sob o fundo, a cobrinha.
    
    }
};

function Objetos(){
    function Objeto1(){
        context.fillStyle = "green";
        context.fillRect(objetos.objeto1.x, objetos.objeto1.y, pixel, pixel);
    }
    function Objeto2(){
        context.fillStyle = "green";
        context.fillRect(objetos.objeto2.x, objetos.objeto2.y, pixel, pixel);
    }
    function Objeto3(){
        context.fillStyle = "green";
        context.fillRect(objetos.objeto3.x, objetos.objeto3.y, pixel, pixel);
    }
    function Objeto4(){
        context.fillStyle = "green";
        context.fillRect(objetos.objeto4.x, objetos.objeto4.y, pixel, pixel);
    }

    Objeto1();
    Objeto2();
    Objeto3();
    Objeto4();
}

function comida(){

    context.fillStyle = "black";
    context.fillRect(alimento.x, alimento.y, pixel, pixel);

};

/* 
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

document.addEventListener("keydown", update); //Aqui ele está pegando o evento de click (Ele está esperando a ação) e junto está chamando o update.
function update(event){
    
    //Controle.
    //Ela só muda se a posição não for contrária a ela.
    //Events com Arrows do teclado
    if(event.keyCode == 37 && direcao != "direita") direcao = "esquerda"; 
    if(event.keyCode == 38 && direcao != "baixo") direcao = "cima";

    if(event.keyCode == 39 && direcao != "esquerda") direcao = "direta";
    if(event.keyCode == 40 && direcao != "cima") direcao = "baixo";
    //Ao apertar alguma tecla, o event vai chamar a update e logo após irá passar como argumento o evento de tecla setada.

    //Multiplayer (Irei implementar essa semana)
    //Events com W,A,S,D
    //if(event.keyCode == 65 && direcao != "direita") direcao = "esquerda"; 
    //if(event.keyCode == 87 && direcao != "baixo") direcao = "cima";

    //if(event.keyCode == 68 && direcao != "esquerda") direcao = "direta";
    //if(event.keyCode == 83 && direcao != "cima") direcao = "baixo";


    //Tabela de keycode: https://odesenvolvedor.com.br/tabela-de-key-codes-para-javascript_1464.html

};

/* 
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

function iniciarjogo(){ //Função que irá iniciar e definir o controle do jogo.

    //Plano cartesiano para fazer ele retornar após sair da tela.
    if(cobra[0].x > 15 * pixel && direcao == "direta") cobra[0].x = 0;
    if(cobra[0].x < 0 && direcao == "esquerda") cobra[0].x = 16 * pixel;
    
    if(cobra[0].y > 15 * pixel && direcao == "baixo") cobra[0].y = 0;
    if(cobra[0].y < 0 && direcao == "cima") cobra[0].y = 16 * pixel;

    //Finalizar caso a cobra se enrole.
    for(i = 1; i < cobra.length; i++){

        //Se a posição 0 de cobra x for igual i do corpo (seja qual for o indice do corpo) e posição y igual a i do corpo, o jogo para.
        if(cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y){
            clearInterval(jogo);
            alert("Fim de jogo!");
            document.location.reload(true);
        }
    }

    background();
    cobrinha();
    comida();
    Objetos();

    let cobra_X = cobra[0].x;
    let cobra_Y = cobra[0].y;
    
    //Definindo os controles.
    if(direcao == "direta") cobra_X += pixel;
    if(direcao == "esquerda") cobra_X -= pixel;

    if(direcao == "cima") cobra_Y -= pixel;
    if(direcao == "baixo") cobra_Y += pixel;

    //--------------------------------------------------------------
    if(cobra_X != objetos.objeto1.x || cobra_Y != objetos.objeto1.y){      
    }else{
        var objeto1 = objetos.objeto1.x = Math.floor(Math.random() * 15 + 1) * pixel;
        var objeto2 = objetos.objeto1.y = Math.floor(Math.random() * 15 + 1) * pixel;
        
        if(objeto1 && objeto2){
            document.location.reload(true);
        }
    }

    if(cobra_X != objetos.objeto2.x || cobra_Y != objetos.objeto2.y){ 
    }else{
        var objeto1 = objetos.objeto2.x = Math.floor(Math.random() * 15 + 1) * pixel;
        var objeto2 = objetos.objeto2.y = Math.floor(Math.random() * 15 + 1) * pixel;
        
        if(objeto1 && objeto2){
            document.location.reload(true);
        }
    }

    if(cobra_X != objetos.objeto3.x || cobra_Y != objetos.objeto3.y){
    }else{
        var objeto1 = objetos.objeto3.x = Math.floor(Math.random() * 15 + 1) * pixel;
        var objeto2 = objetos.objeto3.y = Math.floor(Math.random() * 15 + 1) * pixel;
        
        if(objeto1 && objeto2){
            document.location.reload(true);
        }
    }
    
    if(cobra_X != objetos.objeto4.x || cobra_Y != objetos.objeto4.y){
    }else{
        var objeto1 = objetos.objeto4.x = Math.floor(Math.random() * 15 + 1) * pixel;
        var objeto2 = objetos.objeto4.y = Math.floor(Math.random() * 15 + 1) * pixel;
        
        if(objeto1 && objeto2){
            document.location.reload(true);
        }
    }

     //--------------------------------------------------------------
    //A cobra pega a comida ao mesmo tempo que cresce.
    if(cobra_X != alimento.x || cobra_Y != alimento.y){
        
        cobra.pop();
    
    }else{
        score += 2
        document.getElementById("score").innerHTML = score
        alimento.x = Math.floor(Math.random() * 15 + 1) * pixel;
        alimento.y = Math.floor(Math.random() * 15 + 1) * pixel;
        audio.play();
    }


    let newHead = {

        x: cobra_X,
        y: cobra_Y

    }

    cobra.unshift(newHead);
};

/* 
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

let jogo = setInterval(iniciarjogo, 100); //Intervalo de atualização.
