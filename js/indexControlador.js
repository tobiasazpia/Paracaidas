let nuevos = document.querySelector(".seccionW .nuevos");
let populares = document.querySelector(".seccionW .populares");
let semanal = document.querySelector(".seccionB .semanales");

//Carga la data del JSON / base de datos a un array 
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.length == 0) {
            localStorage.setItem("tituloObraActual", "temp");
            localStorage.setItem("autorActual", "temp");
    }
    fetch(hacerPathRelativo("js/db.json"))
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((data)=>{
        nuevos.innerHTML = "";
        populares.innerHTML = "";
        semanal.innerHTML = "";

        definirNuevos(data);
        definirPopulares(data);
        definirSemanal(data);
    })
    .catch((err)=>{console.log(err)})
});

function mostrarObraEnSeccion(obra,seccion){

    const titulo = document.createElement("h2");
    titulo.textContent = obra.titulo;
    seccion.appendChild(titulo);

    const resumen = document.createElement("p");
    resumen.textContent = obra.resumen;
    seccion.appendChild(resumen);

    const aut = document.createElement("h4");
    aut.textContent = obra.autor;
    seccion.appendChild(aut);

    titulo.addEventListener('click', pedirObra);
    aut.addEventListener('click', pedirAutor);
}

function definirNuevos(obras){
    //ultimo elemento en la lista
    //mas adelante, ultimos 3, mostrados en un carusel
    mostrarObraEnSeccion(obras[obras.length-1],nuevos);
}

function definirPopulares(obras){
    //requerimiento, local storage de likes
    //mirar el local storage y ver cual tiene mas likes, va aca
}


function definirSemanal(obras){
    //requrimiento, las otras dos
    //al azar, que no esten siendo mostrados en ninguna de las otras dos categorias
}

function pedirObra(evt){
    localStorage.setItem("tituloObraActual", evt.target.textContent);
    window.location.href = "pages/obraGenerico.html";
}

function pedirAutor(evt){
    localStorage.setItem("autorActual", evt.target.textContent);
    window.location.href = "pages/autorGenerico.html";
}