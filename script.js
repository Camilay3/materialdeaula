var b1 = document.getElementById("baula01");
var b2 = document.getElementById("baula02");
/* var b3 = document.getElementById("baula03");
var b4 = document.getElementById("baula04");
var b5 = document.getElementById("baula05");
var b6 = document.getElementById("baula06"); */

function textoEntrar(bx, txt){
    bx.innerText= txt
    bx.style.lineHeight= '30px';
    bx.style.fontSize= '20px';
}

function textoSair(bx, txt){
    bx.innerText= txt
    bx.style.lineHeight= '200px';
    bx.style.fontSize= '30px';
}

function entrar01(){
    textoEntrar(b1, 'Formatação \nde prints');
}

function sair01(){
    textoSair(b1, 'Aula 01');
}

function entrar02(){
  textoEntrar(b2, 'Cores e \nestruturas');
}

function sair02(){
  textoSair(b2, 'Aula 02');
}

/*function entrar03(){
    textoEntrar(b3, '');
}

function sair03(){
    textoSair(b3, 'Aula 03');
}

function entrar04(){
    textoEntrar(b4, '');
}

function sair04(){
    textoSair(b4, 'Aula 04');
}

function entrar05(){
    textoEntrar(b5, '');
}

function sair05(){
    textoSair(b5, 'Aula 05');
}

function entrar06(){
    textoEntrar(b6, '');
}

function sair06(){
    textoSair(b6, 'Aula 06');
}*/
