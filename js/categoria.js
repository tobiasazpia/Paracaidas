let obrasFiltradas;
let ultimaSeccionR = true;

//Carga la data del JSON / base de datos a un array 
window.addEventListener("DOMContentLoaded", () => {
    fetch(hacerPathRelativo("js/db.json"))
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((data)=>{
    //     <div class="grillaL">
    //     <div class="head">head</div>
    //     <div class="info">info</div>
    //     <div class="img">img</div>
    //   </div>
    //   <div class="grillaR">
    //     <div class="head">head</div>
    //     <div class="info">info</div>
    //     <div class="img">img</div>
    //   </div>
        obrasFiltradas = data.filter(esDeEstaCategoria);
        let main = document.querySelector("main");
        main.innerHTML = "";
        obrasFiltradas.forEach(obra => {         
            const sec = document.createElement("div");
                if (ultimaSeccionR) {

                    sec.classList.add("grillaL");
                } else {
                    sec.classList.add("grillaR");
                }                
                ultimaSeccionR = !ultimaSeccionR;
                main.appendChild(sec);

                //elementos de la grilla
                const head = document.createElement("div");
                head.classList.add("head");
                sec.appendChild(head);
                const info = document.createElement("div");
                info.classList.add("info");
                sec.appendChild(info);
                const imagen = document.createElement("div");
                imagen.classList.add("imagen");
                sec.appendChild(imagen);

                //En head
                const titulo = document.createElement("h2");
                titulo.textContent = obra.titulo;
                titulo.classList.add("miBotonObra");
                head.appendChild(titulo);

                //En Info
                const resumen = document.createElement("div");
                resumen.classList.add("pGrilla");
                resumen.textContent = obra.resumen;
                info.appendChild(resumen);
                const aut = document.createElement("div");
                aut.classList.add("autGrilla");
                aut.textContent = obra.autor;
                aut.classList.add("miBotonAutor");
                info.appendChild(aut);
                
                //En imagen
                // const imgCont = document.createElement("div");
                // imgCont.classList.add("imgContenedor");
                // imagen.appendChild(imgCont)

                const img = document.createElement("img");
                img.src = "../" + obra.img;
                img.alt = "Imagen de " + obra.titulo;
                imagen.appendChild(img)

                titulo.addEventListener('click', pedirObra);
                aut.addEventListener('click', pedirAutor);
        });
    })
    .catch((err)=>{        Swal.fire({
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
          });})
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