let obra;
let tituloHead = document.getElementsByTagName("title");
let tituloBody = document.getElementById("ObraTitulo");
let contenido = document.querySelector(".contenido");
let autor = document.querySelector(".autor");

let infoGuardada;

window.addEventListener("DOMContentLoaded", () => {
    fetch(hacerPathRelativo("js/db.json"))
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            let titulo = localStorage.getItem("tituloObraActual");
            obra = data.find(element => element.titulo == titulo);

            tituloHead.textContent = obra.titulo;
            tituloBody.textContent = obra.titulo;
            contenido.innerHTML = obra.contenido;
            autor.textContent = obra.autor;
            autor.addEventListener('click', pedirAutor);

            prepararLocalStorage();
        })
        .catch((err) => { console.log(err) })
});

function prepararLocalStorage(){
    infoGuardada = JSON.parse(localStorage.getItem(obra.titulo));
    if (!infoGuardada) {
        infoGuardada = {
            meGusta: 0,
            descargas: 0,
            reseñas: [],
        }
        localStorage.setItem(obra.titulo, JSON.stringify(infoGuardada));
    }
    contMG.textContent = infoGuardada.meGusta;
    contDescargas.textContent = infoGuardada.descargas;
}

let btnMG = document.getElementById("btnMeGusta");
let contMG = document.getElementById("contadorMeGusta");
btnMG.addEventListener("click", clickMG);
function clickMG() {
    console.log("mg clicik");
    console.log(infoGuardada);
    contMG.textContent = ++infoGuardada.meGusta;
    localStorage.setItem(obra.titulo, JSON.stringify(infoGuardada))
}

let btnDescargar = document.getElementById("btnDescargar");
let contDescargas = document.getElementById("contadorDescargas");
btnDescargar.addEventListener("click", clickDescargar);
function clickDescargar() {
    contDescargas.textContent = ++infoGuardada.descargas;
    localStorage.setItem(obra.titulo, JSON.stringify(infoGuardada))
}

function pedirAutor(evt){
    localStorage.setItem("autorActual", evt.target.textContent);
    window.location.href = "autorGenerico.html";
}