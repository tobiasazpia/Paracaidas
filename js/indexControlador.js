let nuevos = document.querySelector(".seccionW .nuevos");
let populares = document.querySelector(".seccionW .populares");
let semanal = document.querySelector(".seccionB .semanales");

let indexDePopular;

//Carga la data del JSON / base de datos a un array 
window.addEventListener("DOMContentLoaded", () => {
    // if (localStorage.length == 0) {
    //     localStorage.setItem("tituloObraActual", "temp");
    //     localStorage.setItem("autorActual", "temp");
    //     localStorage.setItem("profIndex", window.location.href.split("/").length);
    // }
    fetch(hacerPathRelativo("js/db.json"))
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            nuevos.innerHTML = "";
            populares.innerHTML = "";
            semanal.innerHTML = "";

            definirNuevos(data);
            definirPopulares(data);
            definirSemanal(data);
        })
        .catch((err) => { console.log(err) })
});

function mostrarObraEnSeccion(obra, seccion) {

    const titulo = document.createElement("h2");
    titulo.textContent = obra.titulo;
    titulo.classList.add("miBoton");
    seccion.appendChild(titulo);

    const resumen = document.createElement("p");
    resumen.textContent = obra.resumen;
    seccion.appendChild(resumen);

    const aut = document.createElement("h4");
    aut.textContent = obra.autor;
    aut.classList.add("miBoton");
    seccion.appendChild(aut);

    titulo.addEventListener('click', pedirObra);
    aut.addEventListener('click', pedirAutor);
}

function definirNuevos(obras) {
    //ultimo elemento en la lista
    //mas adelante, ultimos 3, mostrados en un carusel
    mostrarObraEnSeccion(obras[obras.length - 1], nuevos);
}

function definirPopulares(obras) {
    let topMeGusta = -1;
    let topObra;
    let index = 0;
    obras.forEach(obra => {
        if (JSON.parse(localStorage.getItem(obra.titulo))) {
            if (JSON.parse(localStorage.getItem(obra.titulo)).meGusta > topMeGusta) {
                topMeGusta = JSON.parse(localStorage.getItem(obra.titulo)).meGusta;
                topObra = obra;
                indexDePopular = index;
            }
        }
        index++;
    });
    if (topMeGusta >= 0) {
        mostrarObraEnSeccion(topObra, populares);
    }
}

function definirSemanal(obras) {
    //al azar, que no esten siendo mostrados en ninguna de las otras dos categorias
    let index = getRandomInt(obras.length - 2);
    if (index >= indexDePopular) {
        index++;
    }
    mostrarObraEnSeccion(obras[index], semanal);
}

function pedirObra(evt) {
    localStorage.setItem("tituloObraActual", evt.target.textContent);
    window.location.href = "pages/obraGenerico.html";
}

function pedirAutor(evt) {
    localStorage.setItem("autorActual", evt.target.textContent);
    window.location.href = "pages/autorGenerico.html";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}