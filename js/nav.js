let nav;
let paginas;
let profundidadDeIndex;
let ubicacion;
let profundidad;

const subimos = "../"

//Cargar info
window.addEventListener("DOMContentLoaded", () => {
    //Generando la Navbar dinamicamente para no repetir codigo HTML y que sea mas mantenible
    let url = window.location.href.split("/");
    if (url[url.length - 1] == "index.html" || url[url.length - 2] == "Paracaidas") {
        localStorage.setItem("profIndex", url.length);
    } else {
        localStorage.setItem("profIndex", url.length - 1);
    }
    determinarProfundidad();

    fetch(hacerPathRelativo("js/db.json"))
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            obras = data;
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
    prepararNav();
});

function determinarProfundidad() {
    ////Haciendo path absolutos manuamente para poder generalizar la Nav Bar
    ////Tiene que haber una forma menos rebuscada de hacer esto pero no la encontre
    profundidadDeIndex = localStorage.getItem("profIndex");
    ubicacion = window.location.href.split("/");
    profundidad = ubicacion.length - profundidadDeIndex;
}

//crear nav
function prepararNav() {

    nav = document.querySelector(".navbar");

    ////Logo
    const logo = agregarSeccionAlNavBar("logo");

    const logoLink = document.createElement("a");
    logoLink.href = hacerPathRelativo("#");
    logo.appendChild(logoLink)

    const logoImg = document.createElement("img");
    logoImg.classList.add("nav-brand");
    logoImg.src = hacerPathRelativo("media/parachuteSinFondocirculo.png");
    logoImg.alt = "Inicio";
    logoLink.appendChild(logoImg)

    ////Paginas
    paginas = agregarSeccionAlNavBar("paginas");

    agregarPaginaAlNavBar("pages/historias.html", "Historias");
    agregarPaginaAlNavBar("pages/juegosDeMesa.html", "Juegos de mesa");
    agregarPaginaAlNavBar("pages/juegosDeRol.html", "Juegos de rol");
    agregarPaginaAlNavBar("pages/videojuegos.html", "Videojuegos");
    agregarPaginaAlNavBar("pages/autoresYColaboradores.html", "Autores y colaboradores");

}

function hacerPathRelativo(pathDesdeIndex) {
    for (let index = 0; index < profundidad; index++) {
        pathDesdeIndex = subimos + pathDesdeIndex;
    }
    return pathDesdeIndex;
}

//////Devuelve un elemento de la clase especificada ya como hijo de la nav
function agregarSeccionAlNavBar(clase) {
    const sec = document.createElement("div");
    sec.classList.add(clase);
    nav.appendChild(sec);
    return sec;
}

//////Conecta la NavBar a un HTML mostrando su titulo en ella como hijo de la seccion paginas
function agregarPaginaAlNavBar(pathDesdeIndex, nombre) {
    const pag = document.createElement("div");
    pag.classList.add("nav-item");
    paginas.appendChild(pag);

    const pagLink = document.createElement("a");
    pagLink.classList.add("nav-link");
    pagLink.href = hacerPathRelativo(pathDesdeIndex);
    pagLink.textContent = nombre;
    pag.appendChild(pagLink);
}