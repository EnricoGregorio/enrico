let cursos = window.document.querySelector('.educacao')
let xpTrabalhos = window.document.querySelector('.trabalhos')
xpTrabalhos.style.display = 'none'

function mostrarTrabalhos() {
    cursos.style.display = 'none'
    return xpTrabalhos.style.display = 'block'
}

function mostrarEducacao() {
    xpTrabalhos.style.display = 'none'
    return cursos.style.display = 'block'
}

$("button").click(function() {
    $(cursos).fadeout("slow");
    $(xpTrabalhos).fadein("slow");
});

$("button").click(function() {
    $(xpTrabalhos).fadeout("slow");
    $(cursos).fadein("slow");
});