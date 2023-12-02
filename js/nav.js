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


////Logo
const logo = document.createElement("div");
logo.classList.add("logo");
nav.appendChild(logo);

const logoLink = document.createElement("a");
logoLink.href = hacerPathRelativo("#");
logo.appendChild(logoLink)

const logoImg = document.createElement("img");
logoImg.classList.add("nav-brand");
logoImg.src = hacerPathRelativo("media/parachuteLogo.jpg");
logoImg.alt = "Inicio";
logoLink.appendChild(logoImg)

////Paginas
const paginas = document.createElement("div");
paginas.classList.add("paginas");
nav.appendChild(paginas);

//////Historias
const historias = document.createElement("div");
historias.classList.add("nav-item");
paginas.appendChild(historias);

const histLink = document.createElement("a");
histLink.classList.add("nav-link");
histLink.href = hacerPathRelativo("pages/historias.html");
histLink.textContent = "Historias";
historias.appendChild(histLink);

//////Juegos De Mesa
const juegosDeMesa = document.createElement("div");
juegosDeMesa.classList.add("nav-item");
paginas.appendChild(juegosDeMesa);

const jDMLink = document.createElement("a");
jDMLink.classList.add("nav-link");
jDMLink.href = hacerPathRelativo("pages/juegosDeMesa.html");
jDMLink.textContent = "Juegos De Mesa";
juegosDeMesa.appendChild(jDMLink);

//////Juegos De Rol
const juegosDeRol = document.createElement("div");
juegosDeRol.classList.add("nav-item");
paginas.appendChild(juegosDeRol);

const jDRLink = document.createElement("a");
jDRLink.classList.add("nav-link");
jDRLink.href = hacerPathRelativo("pages/juegosDeRol.html");
jDRLink.textContent = "Juegos De Rol";
juegosDeRol.appendChild(jDRLink);

//////Videojuegos
const videojuegos = document.createElement("div");
videojuegos.classList.add("nav-item");
paginas.appendChild(videojuegos);

const vJLink = document.createElement("a");
vJLink.classList.add("nav-link");
vJLink.href = hacerPathRelativo("pages/videojuegos.html");
vJLink.textContent = "Videojuegos";
videojuegos.appendChild(vJLink);

//////Autores
const autores = document.createElement("div");
autores.classList.add("nav-item");
paginas.appendChild(autores);

const autLink = document.createElement("a");
autLink.classList.add("nav-link");
autLink.href = hacerPathRelativo("pages/autoresYColaboradores.html");
autLink.textContent = "Autores Y Colaboradores";
autores.appendChild(autLink);