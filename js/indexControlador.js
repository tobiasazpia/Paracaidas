let nuevos = document.querySelector(".seccionW .nuevos");
let populares = document.querySelector(".seccionW .populares");
let semanal = document.querySelector(".seccionB .semanales");

let indexDePopular;
let indexDeNuevo;

//Carga la data del JSON / base de datos a un array 
window.addEventListener("DOMContentLoaded", () => {
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
        .catch((err) => {     console.error(err)   /*Swal.fire({
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
          }); */})
});

function mostrarObraEnSeccion(obra, seccion) {

    const titulo = document.createElement("h2");
    titulo.textContent = obra.titulo;
    titulo.classList.add("miBotonObra");
    seccion.appendChild(titulo);

    const resumen = document.createElement("p");
    resumen.textContent = obra.resumen;
    seccion.appendChild(resumen);

    const aut = document.createElement("h4");
    aut.textContent = obra.autor;
    aut.classList.add("miBotonAutor");
    seccion.appendChild(aut);

    titulo.addEventListener('click', pedirObra);
    aut.addEventListener('click', pedirAutor);
}

function definirNuevos(obras) {
    //Usando luxon para determinar la obra mas reciente
    //mas adelante, ultimos 3, mostrados en un carusel
    // mostrarObraEnSeccion(obras[obras.length - 1], nuevos);
    let masNueva = luxon.DateTime.local(1970,1,1);
    let obraReciente;
    let estaObraFecha;
    let index = 0;
    obras.forEach(obra => {
        estaObraFecha =  luxon.DateTime.fromSQL(obra.fecha);
        if (estaObraFecha > masNueva) {
            obraReciente = obra;
            masNueva = estaObraFecha;
            indexDeNuevo = index;
        }
    });
    mostrarObraEnSeccion(obraReciente, nuevos);
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
    }else{
        mostrarObraEnSeccion(obras[0], populares);
    }
}

function definirSemanal(obras) {
    //al azar, que no esten siendo mostrados en ninguna de las otras dos categorias
    let index = getRandomInt(obras.length - 2);
    if (index >= indexDePopular) index++;
    if (index >= indexDeNuevo) index++;
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