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
            aut.classList.add("miBoton");
            main.appendChild(aut);
        
            aut.addEventListener('click', pedirAutor);
        })
    })
    .catch((err)=>{console.log(err)})
});

function pedirAutor(evt){
    localStorage.setItem("autorActual", evt.target.textContent);
    window.location.href = "autorGenerico.html";
}