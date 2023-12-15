let obrasFiltradas;
let ultimaSeccionB = true;

//Carga la data del JSON / base de datos a un array 
window.addEventListener("DOMContentLoaded", () => {
    fetch(hacerPathRelativo("js/db.json"))
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((data)=>{
        obrasFiltradas = data.filter(esDeEstaCategoria);
        let main = document.querySelector("main");
        main.innerHTML = "";
        obrasFiltradas.forEach(obra => {         
            const sec = document.createElement("section");
                if (ultimaSeccionB) {
                    sec.classList.add("seccionW");
                } else {
                    sec.classList.add("seccionB");
                }
                ultimaSeccionB = !ultimaSeccionB;
                main.appendChild(sec);
                const titulo = document.createElement("h2");
                titulo.textContent = obra.titulo;
                titulo.classList.add("miBotonObra");
                sec.appendChild(titulo);
                const resumen = document.createElement("p");
                resumen.textContent = obra.resumen;
                sec.appendChild(resumen);
                const aut = document.createElement("h4");
                aut.textContent = obra.autor;
                aut.classList.add("miBotonAutor");
                sec.appendChild(aut);
            
                titulo.addEventListener('click', pedirObra);
                aut.addEventListener('click', pedirAutor);
        });
    })
    .catch((err)=>{console.log(err)})
});

function esDeEstaCategoria(obra){
    return categoria == obra.categoria;
}

function pedirObra(evt){
    localStorage.setItem("tituloObraActual", evt.target.textContent);
    window.location.href = "obraGenerico.html";
}

function pedirAutor(evt){
    localStorage.setItem("autorActual", evt.target.textContent);
    window.location.href = "autorGenerico.html";
}