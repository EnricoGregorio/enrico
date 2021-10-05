$(function () {
    let cursos = $('div.educacao')
    let xpTrabalhos = $('div.trabalhos')
    $("#job").click(function () {
        if (xpTrabalhos.is(':hidden') == true) {
            cursos.fadeOut()
            xpTrabalhos.fadeIn(1500)
            window.document.querySelector("#edu").style.backgroundColor = "#FFFFFF"
            window.document.querySelector("#job").style.backgroundColor = "#F2F2F2"
        }
    })
    $("#edu").click(function () {
        if (cursos.is(':hidden') == true) {
            xpTrabalhos.fadeOut()
            cursos.fadeIn(1500)
            window.document.querySelector("#job").style.backgroundColor = "#FFFFFF"
            window.document.querySelector("#edu").style.backgroundColor = "#F2F2F2"
        }
    })
})