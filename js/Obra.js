// obra - titulo, contenido, reviews,,,like, descargar, autor, seguir autor, escribir review, dejar propina
// autor - seguir, dejar propina
// review - like

//Array de Obras
let obras = [
    {
        titulo: "Caminos de Batalla",
        contenido: "Contenido de CdB",
        reseñas: [],
        meGusta: 0,
        descargas: 0,
        autor: "Tobias Azpiazu"
    },
    {
        titulo: "sol",
        contenido: "Contenido de sol",
        reseñas: [],
        meGusta: 0,
        descargas: 0,
        autor: "Tobias Azpiazu"
    },
    {
        titulo: "Nuevo Mundo",
        contenido: "Contenido de NM",
        reseñas: [],
        meGusta: 0,
        descargas: 0,
        autor: "Tobias Azpiazu"
    },
    {
        titulo: "Mariposas y Huracanes",
        contenido: "Contenido de MyH",
        reseñas: [],
        meGusta: 0,
        descargas: 0,
        autor: "Tobias Azpiazu"
    }
]

//Funciones

function setUpLocalStorage() {
    //Si no hay local storage, prepararlo; si ya hay, cargarlo en el array de obras
    let index = 0;
    if (localStorage.length == 0) {
        obras.forEach(element => {
            localStorage.setItem((index++).toString(), JSON.stringify(element));
        }
        )
    } else {
        obras.forEach(element => {
            obras[index] = JSON.parse(localStorage.getItem((index++).toString()));
        })
    }
}

//Botones de Obra
function setUpBotones() {
    let btnMG = document.getElementById("btnMeGusta");
    btnMG.addEventListener("click", clickMG);
    function clickMG() {
        contMG.textContent = ++obras[indexObra].meGusta;
        localStorage.setItem(indexObra, JSON.stringify(obras[indexObra]))
    }

    let btnDescargar = document.getElementById("btnDescargar");
    btnDescargar.addEventListener("click", clickDescargar);
    function clickDescargar() {
        contDescargas.textContent = ++obras[indexObra].descargas;
        localStorage.setItem(indexObra, JSON.stringify(obras[indexObra]))
    }

    let btnPropina = document.getElementById("btnPropina");
    btnPropina.addEventListener("click", clickPropina);
    function clickPropina() {
        alert("To Do: integracion con APIs de Mercado Pago, Cafecito, etc");
    }

    let btnSeguir = document.getElementById("btnSeguir");
    btnSeguir.addEventListener("click", clickSeguir);
    function clickSeguir() {
        alert("To Do: Requiere primero implementacion de usuario");
    }

    let btnReseña = document.getElementById("btnDejarReseña");
    btnReseña.addEventListener("click", clickDejarReseña);
    function clickDejarReseña() {
        alert("To Do: requeriria crear una nueva seccion de html, poniendo un input (?) y despues transformandolo en texto cuando pongan listo");
    }
}

//Codigo Principal

setUpLocalStorage();

//Obtener Indice de la obra en la que estamos
let obraTitulo = document.querySelector("h1").textContent.trim();
let indexObra = obras.findIndex(element => element.titulo == obraTitulo);

//Contadores
let contMG = document.getElementById("contadorMeGusta");
let contDescargas = document.getElementById("contadorDescargas");
contMG.textContent = obras[indexObra].meGusta;
contDescargas.textContent = obras[indexObra].descargas;

setUpBotones();

var opened = window.open("mariposasYHuracanes");
opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");