var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

// página manhwas

function mangas(){
    window.location.href = "../index.html"
}

function manhwas(){
    window.location.href = "../paginas/manhwas.html"
}
manhwas18

function manhwas18(){
    window.location.href = "../paginas/manhwa18.html"
}

function hentai(){
    window.location.href = "../paginas/hentai.html"
}

function favoritos(){
    window.location.href = "../paginas/favoritos.html"
}

function lidos(){
    window.location.href = "../paginas/lidos.html"
}