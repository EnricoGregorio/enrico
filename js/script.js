
// xpTrabalhos.style.display = 'none'

// function mostrarTrabalhos() {
//     cursos.style.display = 'none'
//     return xpTrabalhos.style.display = 'block'
// }

// function mostrarEducacao() {
//     xpTrabalhos.style.display = 'none'
//     return cursos.style.display = 'block'
// }

$(function () {
    let cursos = $('div.educacao')
    let xpTrabalhos = $('div.trabalhos')
    $("#job").click(function () {
        if (xpTrabalhos.is(':hidden') == true) {
            xpTrabalhos.fadeIn(2000)
            cursos.fadeOut()
            window.document.querySelector("#edu").style.backgroundColor = "#FFFFFF"
            window.document.querySelector("#job").style.backgroundColor = "#F2F2F2"
            window.document.querySelector("#job").style.borderRadius = "10px"
        }
    })
    $("#edu").click(function () {
        if (cursos.is(':hidden') == true) {
            cursos.fadeIn(2000)
            xpTrabalhos.fadeOut()
            window.document.querySelector("#job").style.backgroundColor = "#FFFFFF"
            window.document.querySelector("#edu").style.backgroundColor = "#F2F2F2"
            window.document.querySelector("#edu").style.borderRadius = "10px"
        }
    })
})

// $("button").click(function() {
//     $("div.educacao").fadeout("slow");
//     $("div.trabalhos").fadein("slow");
// });

// $("div.trabalhos").click(function() {
//     $("div.trabalhos").fadeout("slow");
//     $("div.educacao").fadein("slow");
// });