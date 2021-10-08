window.document.querySelector(".fa-times").style.display = 'none'

$(function() {
    $('nav a').click(function(e) {
        e.preventDefault()
        let id = $(this).attr('href'), targetOffset = $(id).offset().top
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500)
    })

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

// Função do botão para retornar ao topo

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("return-button").style.display = "block";
    } else {
        document.getElementById("return-button").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}