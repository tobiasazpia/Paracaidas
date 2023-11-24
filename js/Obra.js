// obra - titulo, contenido, reviews,,,like, descargar, autor, seguir autor, escribir review, dejar propina
// autor - seguir, dejar propina
// review - like

//Array de Obras
let Obras = [
    {
        titulo: "Caminos de Batalla",
        contenido: "Contenido de CdB",
        reseñas: [],
        meGusta: 0,
        descargas: 0,
        autor: "Tobias Azpiazu"
    },
    {
        titulo: "Sol",
        contenido: "Contenido de Sol",
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

//Obtener Indice de la obra en la que estamos
//To Do: chequear que sea una pagina de obra
let ObraTitulo = "";
try{
    ObraTitulo = document.querySelector("h1").textContent.trim();
} catch (error) {
    ObraTitulo = ""
}

let indexObra = Obras.findIndex(element => element.titulo == ObraTitulo);

//Contadores
let contMG = document.getElementById("contadorMeGusta");
let contDescargas = document.getElementById("contadorDescargas");

//Botones de Obra
let btnMG = document.getElementById("btnMeGusta");
btnMG.addEventListener("click", clickMG);
function clickMG()
{
    contMG.textContent = ++Obras[indexObra].meGusta;
}

let btnDescargar = document.getElementById("btnDescargar");
btnDescargar.addEventListener("click", clickDescargar);
function clickDescargar()
{
    contDescargas.textContent = ++Obras[indexObra].descargas;
}

let btnPropina = document.getElementById("btnPropina");
btnPropina.addEventListener("click", clickPropina);
function clickPropina()
{
    alert("To Do: integracion con APIs de Mercado Pago, Cafecito, etc");
}

let btnSeguir = document.getElementById("btnSeguir");
btnSeguir.addEventListener("click", clickSeguir);
function clickSeguir()
{
    alert("To Do: Requiere primero implementacion de usuario");
}

let btnReseña = document.getElementById("btnDejarReseña");
btnReseña.addEventListener("click", clickDejarReseña);
function clickDejarReseña()
{
    alert("To Do: requeriria crear una nueva seccion de html, poniendo un input (?) y despues transformandolo en texto cuando pongan listo");
}