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
                main.appendChild(obr);
            
                obr.addEventListener('click', pedirObra);
            })
        })
        .catch((err) => { console.log(err) })
});

function pedirObra(evt){
    localStorage.setItem("tituloObraActual", evt.target.textContent);
    window.location.href = "obraGenerico.html";
}