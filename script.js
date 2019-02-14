// const quadrado = document.querySelector ('.quadrado');
// const imgCachorro= document.querySelector('img');

// const mostrarQuadrado = function (){
//     quadrado.classList.toggle('visivel');
// }

// const destaqueImagem = function(){
//     imgCachorro.classList.toggle('destaque');
// }

// quadrado.onmouseover = mostrarQuadrado;

// imgCachorro.onmouseenter = destaqueImagem;
// imgCachorro.onmouseout = destaqueImagem;

const menuHamburguer = document.querySelector (".menuHamburguer");
const navMenuHamburguer = document.querySelector(".navMenuHamburguer");
const mostrarAncora = function (){
    navMenuHamburguer.classList.toggle('visivel')
}


menuHamburguer.onclick = mostrarAncora;
