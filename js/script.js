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

$(".trabalhos").click(function() {
    
})