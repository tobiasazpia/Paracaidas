let obrasDelAutor = [];

window.addEventListener("DOMContentLoaded", () => {
    fetch(hacerPathRelativo("js/db.json"))
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            let main = document.querySelector("main");
            let nombre = document.querySelector(".titulo");
            let autor = localStorage.getItem("autorActual");
            nombre.innerHTML = "<h1>" + autor + "</h1>";
            data.forEach(obra => {
                if (obra.autor == autor){
                    obrasDelAutor.push(obra.titulo);
                }
            });
            obrasDelAutor.forEach(obra =>{
                const obr = document.createElement("h4");
                obr.textContent = obra;
                obr.classList.add("miBotonObra");
                main.appendChild(obr);
            
                obr.addEventListener('click', pedirObra);
            })
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

function pedirObra(evt){
    localStorage.setItem("tituloObraActual", evt.target.textContent);
    window.location.href = "obraGenerico.html";
}