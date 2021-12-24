//preloader
const overlay = document.querySelector('.overlay');
window.addEventListener('load', function(){
    overlay.style.display = 'none';
})

//declaração de variáveis
let exer = document.querySelector('.exercícios');
let correta = document.querySelectorAll('.correct');
let option = document.querySelectorAll('.correct-option');
var nota = 0;

//funções
function mostrarExercícios(){
    exer.style.display = 'block';
}

function calcularNota() {
    var contagem = option.length;

    for (let a=0; a<contagem; a++) {
        if (option[a].checked) {
            if (option.length == 5){
                nota+= 2;
            }
            else {
                nota++;
            }
        }
    }

    Swal.fire(`Sua nota é ${nota}/10`)
    nota= 0;

    for (let i=0; i<correta.length; i++) {
        correta[i].style.backgroundColor = '#BD79FF';
    }
}
