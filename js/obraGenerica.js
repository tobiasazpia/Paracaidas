let obra;
let tituloHead = document.getElementsByTagName("title");
let tituloBody = document.getElementById("ObraTitulo");
let fechaBody = document.getElementById("ObraFecha");
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
            fechaBody.textContent = luxon.DateTime.fromSQL(obra.fecha).toLocaleString();
            contenido.innerHTML = obra.contenido;
            autor.textContent = obra.autor;
            autor.classList.add("miBotonAutor");
            autor.addEventListener('click', pedirAutor);

            prepararLocalStorage();
        })
        .catch((err) => {         Swal.fire({
            title: "Whoops!",
            text: "Algo salio mal...",
            icon: "error",
            showCancelButton: true,
            confirmButtonText: "Probemos de nuevo",
            cancelButtonText: "Ignorar"
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                location.reload();
            }
          }); })
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
    contMG.textContent = ++infoGuardada.meGusta;
    localStorage.setItem(obra.titulo, JSON.stringify(infoGuardada))
    Toastify({
        position: "left",
        gravity: "bottom",
        text: "Me Gusta!",
        duration: 3000     
        }).showToast();
}

let btnDescargar = document.getElementById("btnDescargar");
let contDescargas = document.getElementById("contadorDescargas");
btnDescargar.addEventListener("click", clickDescargar);
function clickDescargar() {
    contDescargas.textContent = ++infoGuardada.descargas;
    localStorage.setItem(obra.titulo, JSON.stringify(infoGuardada))
    Toastify({
        position: "left",
        gravity: "bottom",
        text: "Por ahora no se puede descargar, pero gracias por el entusiasmo! Lo anotamos en el contador!",
        duration: 3000     
        }).showToast();
}

function pedirAutor(evt){
    localStorage.setItem("autorActual", evt.target.textContent);
    window.location.href = "autorGenerico.html";
}