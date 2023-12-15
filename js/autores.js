let autores = [];

//Carga la data del JSON / base de datos a un array 
window.addEventListener("DOMContentLoaded", () => {
    let main = document.querySelector("main");
    fetch(hacerPathRelativo("js/db.json"))
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((data)=>{
        data.forEach(obra =>{
            if (!autores.find(aut =>
                aut == obra.autor
            )){
            autores.push(obra.autor);
            }
        })
        autores.forEach(autor =>{
            const aut = document.createElement("h4");
            aut.textContent = autor;
            aut.classList.add("miBotonAutor");
            main.appendChild(aut);
        
            aut.addEventListener('click', pedirAutor);
        })
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

function pedirAutor(evt){
    localStorage.setItem("autorActual", evt.target.textContent);
    window.location.href = "autorGenerico.html";
}