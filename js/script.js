$(function () {

    // Header
    // Botão do header
    
    window.document.querySelector(".fa-times").style.display = 'none'

    //Funções no header
    $(".menu-button").click(function() {
        let menuMobile = $('nav.mobile')
        if (menuMobile.is(':hidden') == false) {
            menuMobile.slideToggle()
            window.document.querySelector(".fa-bars").style.display = 'block'
            window.document.querySelector(".fa-times").style.display = 'none'
        } else {
            menuMobile.slideToggle()
            window.document.querySelector(".fa-bars").style.display = 'none'
            window.document.querySelector(".fa-times").style.display = 'block'
        }
    })

    // Sessão habilidades
    // Botões da sessão habilidades
    let cursos = $('div.educacao')
    let xpTrabalhos = $('div.trabalhos')

    // Funções na sessão habilidades
    $("#job").click(function() {
        if (xpTrabalhos.is(':hidden') == true) {
            cursos.fadeOut()
            xpTrabalhos.fadeIn(1500)
            window.document.querySelector("#edu").style.backgroundColor = "#FFFFFF"
            window.document.querySelector("#job").style.backgroundColor = "#F2F2F2"
        }
    })

    $("#edu").click(function() {
        if (cursos.is(':hidden') == true) {
            xpTrabalhos.fadeOut()
            cursos.fadeIn(1500)
            window.document.querySelector("#job").style.backgroundColor = "#FFFFFF"
            window.document.querySelector("#edu").style.backgroundColor = "#F2F2F2"
        }
    })
})