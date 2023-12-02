// funciones
// objetos
// arrays
// metodos de busca y filtrado

// el objeto principal, del caul sera el array principal, sera el de obra 
// este tendra nombre, tipo, y autor
// quiero mostrar un array de autores que se genere con la pagina
// va a usar un filtrado para no repetir a partir de la lista de obras

// Array principal: 
const Obras = [
    {
        nombre: "JueagoA",
        tipo: "Juego de Mesa",
        autor: "juan",
        contenido: "lorem"
    }, 
    {
        nombre:"JueagoB",
        tipo: "Historia",
        autor: "juan",
        contenido: "ipsum"       
    }, 
    {
       nombre:"JueagoC",
       tipo: "Videjuego",
       autor: "pepito",
       contenido: "elotrolorem"
    }
]

// Toma un Obra y Return un string resumiendolo
function  ObraToString(obra){
    let ret = obra.nombre + "\n";
    ret += "Tipo: " + obra.tipo + "\n";
    ret += "Autor: " + obra.autor + "\n\n";
    return ret;
}

// Toma un Autor y Return un string resumiendolo
function  AutorToString(autr){
    let ret = autr.nombreAutor + "\n";
    autr.obras.forEach(element => {
        ret += "--- " + (++j).toString() + " - " + element + "\n";
    });
    return ret;
}

//variables de output
let output = "" // texto a mostrar
let i = 0 // cantidad de items
let j = 0 // cantidad de obras en el modo por Autor
let aut = [] // Array de autores por si el usuario lo pide asi, generado dinamicamente durante el programa

// Principio del codigo
alert("Bienvenido a Paracaidas, un lugar donde contar y vivir historias")

let pr = prompt("Queres ver: 1 - Obras  o  2 - autores ?")
if (pr == 1) { // Ver Obras -- version orignal del array, no hay que modificar nada, solo mostrar la data
    Obras.forEach(element => {
        output += (++i).toString() + " - " + ObraToString(element);
    });
    output += "\nEl contenido de que obra queres ver?";
}
else if (pr == 2) { // Ver autores, hay que re organizar la data
    Obras.forEach(element => {
        let au = aut.find(som => som.nombreAutor == element.autor); // chquear si ya existe  el autor
        if(au){
            au.obras.push(element.nombre) // si si, agregale a sus obras esta
        }else{
            let newAut = { // si no, nuevo autor con un array que solo tiene esta obra
                nombreAutor: element.autor,
                obras: [element.nombre]
            }
            aut.push(newAut);
        }
    })
    aut.forEach(element => { // ahora que ya re orgnizamos la data en una lista de autores, ir por ella y mostrar la data
        output += (++i).toString() + " - " + AutorToString(element);
    });
    output += "\nDe cual autor queres seleccionar una obra?";
}
else {
    output = "Error";
}

//Preguntamos que obra quieren ver, o que autor les interesa
let pr2 = prompt(output);
output = "Error"; // si no se modifica hubo algun error / mal input

if(pr == 1){ //Ya estaban por obra, le mostramos el contenido que quieras
    output = Obras[pr2-1].contenido;
}
else if(pr == 2){ // les mostramos todas las obras del autor que eligieron para que elijan una
    j = 0; // reseteamos el numero de obra
    let pr3 = prompt(AutorToString(aut[pr2-1]) + "\nY cual juego de el/ella?");

    let obr = Obras.find(el => el.nombre == aut[pr2-1].obras[pr3-1]); // encontrar la obra en el array principal
    if(obr){
        output = obr.contenido;
    }else{
        output = "Error";
    }
}

alert(output);