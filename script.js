var b = window.document.getElementById("baula01")

function abrirImg01(){
  document.getElementById("aula01").src="Material de aula.png";  
}

function entrar01(){
  b.innerText= 'Formatação \nde prints'
  b.style.lineHeight= '30px'
  b.style.fontSize= '20px'
}

function sair01(){
  b.innerText= 'Aula 01'
  b.style.lineHeight= '200px'
  b.style.fontSize= '30px'
}
