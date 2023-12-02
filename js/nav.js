//Generando la Navbar dinamicamente para no repetir codigo HTML y que sea mas mantenible
const nav = document.querySelector(".navbar");

////Haciendo path absolutos manuamente para poder generalizar la Nav Bar
////Tiene que haber una forma menos rebuscada de hacer esto pero no la encontre
////// Se que el index va a tener 4 elementos en su array por haberlo probado, pero capaz no se mantenga eso fuera de Github pages y live server. Hay alguna forma de chequear al iniciar la pagina? Por ahora queda el 4
const profundidadDeIndex = 4;
const ubicacion = window.location.href.split("/");
const profundidad = ubicacion.length-profundidadDeIndex; 
const backUp = "../"

function hacerPathRelativo(pathDesdeIndex) {
    for (let index = 0; index < profundidad; index++) {
        pathDesdeIndex = backUp + pathDesdeIndex;
    }
    return pathDesdeIndex;
}

//////Conecta la NavBar a un HTML mostrando su titulo en ella
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

//////Devuelve un elemento de la clase especificada ya como hijo de la nav
function agregarSeccionAlNavBar(clase) {
    const sec = document.createElement("div");
    sec.classList.add(clase);
    nav.appendChild(sec);
    return sec;
}

////Logo
const logo = agregarSeccionAlNavBar("logo");

const logoLink = document.createElement("a");
logoLink.href = hacerPathRelativo("#");
logo.appendChild(logoLink)

const logoImg = document.createElement("img");
logoImg.classList.add("nav-brand");
logoImg.src = hacerPathRelativo("media/parachuteLogo.jpg");
logoImg.alt = "Inicio";
logoLink.appendChild(logoImg)

////Paginas
const paginas = agregarSeccionAlNavBar("paginas");

agregarPaginaAlNavBar("pages/historias.html","Historias");
agregarPaginaAlNavBar("pages/juegosDeMesa.html","Juegos De Mesa");
agregarPaginaAlNavBar("pages/juegosDeRol.html","Juegos De Rol");
agregarPaginaAlNavBar("pages/videojuegos.html","Videojuegos");
agregarPaginaAlNavBar("pages/autoresYColaboradores.html","Autores Y Colaboradores");