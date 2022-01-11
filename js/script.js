//Funções JQuery
$(function() {
    let cursos = $('div.educacao')
    let xpTrabalhos = $('div.trabalhos')

    // Função para criar scroll dinâmico para as sessões Sobre mim, Experiências e Contato.
    $('nav a').click(function(e) {
        e.preventDefault()
        let id = $(this).attr('href'), targetOffset = $(id).offset().top
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500)
    })
    // Função para quando pressionar o botão do menu, ele faça algo.
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
    // Funções para quando pressionar algum dos botões de Trabalhos ou Educação, ele mostre o conteúdo.
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
    // Função do botão para retornar ao topo do site.
    $("#return-button").click(function() {
        let topo = $('header'), targetOffset = $(topo).offset().top
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500)
    })
})

// Comando para deixar o ícone X do menu de navegação 'escondido' por padrão.
window.document.querySelector(".fa-times").style.display = 'none'
// Funções para capturar o valor do scroll na página atual.
window.onscroll = function() {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("return-button").style.display = "block";
    } else {
        document.getElementById("return-button").style.display = "none";
    }
}

// Bloco para sempre atualizar o ano de direito autoral do site.
now = new Date
year = now.getFullYear()
window.document.getElementById('copyright-year').innerHTML = year