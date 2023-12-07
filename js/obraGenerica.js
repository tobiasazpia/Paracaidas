    // <section class="seccionB">
    //     <button id="btnMeGusta">Me gusta</button>
    //     <span id="contadorMeGusta">0</span>
    //     <button id="btnDescargar">Descargar</button>
    //     <span id="contadorDescargas">0</span>
    //     <button id="btnPropina">Propina</button>
    //     <h4>Autor: <a class="nav-link" href="../autores/tobiasAzpiazu.html">Tobias Azpiazu</a></h4>
    //     <button id="btnSeguir">Seguir</button>
    //     <button id="btnDejarReseña">Dejar Reseña</button>
    //   </section>

    let obras = [
        {
            titulo: "Caminos de Batalla", //fijo
            categoria: "Juego de Mesa", //fijo
            autor: "Tobias Azpiazu", //fijo
            fecha: "xx/xx/xx", //fijo
            meGusta: 0,  //cambiante, aka local storage
            descargas: 0, //cambiante, aka local storage
            reseñas: [], //cambiante, aka local storage
            contenido: "<h3>Intro</h3><p>Caminos de batalla es un juego de cartas entre 2, 3 o 4 jugadores que se puede jugar usando cualquier mazo. En el tus cartas son tus tropas que mandas a la batalla, y vos como jugador tendras que juzgar si es mejor hacerlo inmediatamente, o invertir tiempo en cosntruir caminos. Trata de que cuando finalmente mandes tus tropas no sea demasiado tarde.</p><h3>Preparacion</h3><p>Primero repartimos 1 vida final a cada jugador, y despues tantas defensas a cada uno como corresponda. Si hay solo 2 jugadores, 5 Defensas, si hay 3 jugadores 4 Defensas, y si hay 4, 3 Defensas. Todas estas cartas se colocan boca abajo enfrente de los jugadores, con la vida final cerca del jugador y las defensas separadas para que se puedan contar facilmente enfrente de ella. Despues repartimos una carta adicional a cada jugador, que sera su mano inicial, y el resto de las cartas pasaran a ser el mazo compartido del cual robaran cartas todos los jugadores.</p><h3>Objetivo</h3><p>Tu objetivo es destruir las Defensas de tus oponentes para poder destruir su vida final, y ser el ultimo jugador sobreviviente. O al menos ser el jugador con mas Defensas cuando se acabe el mazo, finalizando la partida. En caso de que mas de un jugador tenga el mayor numero de defensas, es un empate entre ellos.</p><h3>El Turno</h3><p>El turno de cada jugador, incluyendo el del primero, comienza con este robando cartas, al principio una sola.Despues de eso decide cual accion realizar: Desplegar tropas, construir caminos a la batalla, construis caminos para las rufuerzos, o abstenerse. Y finalmente, decide si va a la batalla o no. Despues de eso, el turno pasa al jugador su izquierda y este comienza su turno.</p><h3>Abstenerse</h3><p>Al abstenerte, decidis no realizar ninguna de las otras acciones y pasas a decidir si vas o no a la batalla.</p><h3>Caminos de Refuerzos</h3><p>Al construir caminos de refuerzos, tomas una de las cartas de tu mano, y la pones boca abajo cerca del mazo,mas cerca tuyo que de otros jugadores. Al principio de tu turno, robas 1 carta, y 1 adicional por cada 2 cartas que tengas en este lugar.</p><h3>Caminos de Batalla</h3><p>Al construir caminos de batalla, tomas una de las cartas de tu mano, y la pones boca abajo cerca tuyo. Simpre que tomes la accion Desplegar Tropas, podes desplegar 1 carta, y 1 adicional por cada 2 cartas que tengas en este lugar.</p><h3>Desplegar Tropas</h3><p>Al desplegar tropas tomas cartas de tu mano como corresponda, al principio una sola, y las pones en tu area de juego.</p><h3>La Batalla</h3><p>Una vez que tomaste tu accion, podes decidir si ir a la batalla. Si no, tu turno pasa al siguiente jugador, pero si a la batalla vas a tener la oportunidad de destruir las defensas de tu oponente y tal vez ganar la partida. Al hacerlo, anuncias con que oponente vas a la batalla si tenes mas de uno, y ahora es el quien puede defenderse: Puede jugar 1 carta de su mano a su zona de juego y decidir con cual de las cartas en tu zona se enfrentara esa. Para todas tus otras cartas en tu zona de juego, vos decidis con cual carta de la zona de tu oponente se enfrentan. Y por cada carta que tengas en tu zona de juego mas que tu oponente en la suya, destruis una de sus defensas, tomando las cartas que las formaban y poniendolas en tu mano.</p><h3>El Enfrentamiento</h3><p>Cuando dos cartas se enfrentan, hay que determinar la carta vencedora. Para eso primero se compara el palo de ellas, siguiendo una logica a lo piedra papel o tijera dependiente del tipo de mazo que se este usando. En un mazo de cartas españolas, una carta de espadas vencera a una de copa, una de copas vencera a una de basto, de basto a oro, y de oro a espada. Mientras que un mazo de cartas inglesas, la pica vence al corazon, el corazon al trebol, el trebol al diamante, y el diamante a la pica. Y asi se puede usar cualquier tipo de mazo con 4 palos. Si se enfrentan cartas del mismo palo, o cartas con palos sin relacion como Espada y Basto o Pica y Trebol, el valor de estas determinara el vencedor, con los As y Anchos siendo la carta de valor mas alto, y los 2s la de valor mas bajo. Si una carta vence o empata en un Enfrentamiento, se mantiene en su zona duego correspondiente para el proximo turno. Pero si pierde, va a un pilon de descarte comun para no ser usada por el resto de la partida.</p><h3>A Jugar</h3><p>Esa es toda la informacion que necesitas para jugar, el truco esta en tomar las decisiones correctas con tus cartas. Tratas de conseguir mas cartas destruyendo las defensas de tu oponente? Construiras caminos para mover tus tropas lo mas rapido posible? Te vas a abstener, para poder jugar tu unica carta cuando tu oponente vaya a la batalla? Divertite descubiriendolo. Mucha suerte.</p>"
        },
        {
            titulo: "Sol",
            categoria: "Videojuego",
            autor: "Tobias Azpiazu",
            fecha: "xx/xx/xx",
            meGusta: 0,
            descargas: 0,
            reseñas: [],
            contenido: "<p>Sol es un juego de plataformas ritmico, en el que tendras que usar las distintas herramientas musicales, tu creatividad, y tu sentido del ritmo para llegar hasta el final de cada nivel, dejando canciones en cada nivel.</p>"
        },
        {
            titulo: "Nuevo Mundo",
            categoria: "Juego de Rol",
            autor: "Tobias Azpiazu",
            fecha: "xx/xx/xx",
            meGusta: 0,
            descargas: 0,
            reseñas: [],
            contenido: "<h3>Juguemos Rol</h3><p>Nuevo Mundo es un juego de rol, lo que significa que vos y tus amigos van a estar contando en conjunto una historia, tirando dados para determinar el resultado de algunas de las acciones que sus personajes tomarán durante la historia. Uno de ustedes tomará el rol de Master, dirigiendo la historia desde arriba, y decidiendo que hacen los personajes mas pequeños, mientras que el resto serán los jugadores; crearán sus propios protagonistas para esta historia y dirigirán su accionar en ella.</p><h3>Conección</h3><p>Como en muchos juegos de rol, en este los jugadores arman personajes que van adquiriendo nuevas habilidades mientras progresan por la historia, pero en este, ese progreso sólo es obtenido al avanzar la historia al conectar con otros y profundizar la relación de su personaje con otros, tanto los de otras jugadores como los habitantes del mundo creados por el Master. Se premia una exploración narrativa, con la idea de generar la motivación en los jugadores para que busquen ese tipo de situaciones.</p><h3>El Nuevo Mundo</h3><p>En Nuevo Mundo, no nos encontramos en la Tierra. Nuestra historia tiene lugar en una realidad en la que dos continentes previamente sin conocimiento del otro, acaban de descubrir que no están solos en el planeta, similar al descubrimiento de América por parte de la sociedad europea en nuestro mundo. Pero a diferencia de nuestros antepasados, el contacto se dio con un balance de poder más simétrico. Los nuevos visitantes, como en nuestra historia, contaban con armas de fuego, caballos, y capacidad de navegación más desarrollada que los habitantes de estas tierras, pero se encontraron con unas civilizaciones organizadas, comunicadas, y listas para hacerles frente. Hubo brotes de nuevas enfermedades con nuevos patógenos traídos por los visitantes, pero nada comparado a las epidemias que se desataron en América tras la llegada de los europeos. Y otro gran igualador permea el mundo, la magia. Tanto los recién llegados como los habitantes nativos del continente controlan artes arcanas, cada una característica de su tierra y reflejante de su cultura, con las que moldean el mundo a su voluntad. Ustedes, los jugadores, estarán tomando las riendas de la historia 80 años después del primer contacto. Estas naciones ya llevan todo ese tiempo conviviendo, habiendo dejado atrás las guerras que se desataron con su llegada, pero las tensiones aún marinan fuertemente en algunos sectores de la población, a ambos lados del conflicto. Estará en ustedes decidir qué historias escribirán, qué aventuras quieren vivir y hacia dónde se dirigirá este Nuevo Mundo.</p>"
        },
        {
            titulo: "Mariposas y Huracanes",
            categoria: "Historia",
            autor: "Tobias Azpiazu",
            fecha: "xx/xx/xx",
            meGusta: 0,
            descargas: 0,
            reseñas: [],
            contenido: '<p>El viento en la cara pegaba distintivo a 2000 metros de altura. Le habían asegurado a Juliana que con la mochila planeadora ajustada a su espalda no tenía nada que temer, pero esas advertencias no estaban evitando que el estómago se le llenase de mariposas al mirar hacia abajo. Mariposas que solo le daban más ganas de saltar.</p><p>Dio un paso para delante recorriendo la tabla de despegue, lista para dar el salto... y se detuvo. Las mariposas se habían transformado en un huracán que le rogaba que mantenga los pies en terreno sólido. Retiró ese paso tan rápido como lo había dado. Fue un reflejo. Ese huracán que se había formado dentro suyo casi le sale por la boca cuando ese paso no encontró nada firme en que apoyarse y comenzó a caer. Esos instantes hasta que logró aferrarse a la madera con su otra pierna y un brazo estarían por siempre en los más aterradores de su vida. Que, si las cosas seguían así, podría tratarse de muy poco tiempo de todos modos.</p><p>Miró, primero hacia abajo, a esas nubes a la merced de ese maldito viento que seguía azotandole la cara. Y después miró hacia arriba, donde su instructora la miraba con una sonrisa superada. Una sonrisa que parecía decir “Te dije que esto iba a pasar. Sabía que no podías...”. Una sonrisa que, con total de borrar, Juliana se enfrentaría a todas las mariposas y huracanes del mundo.</p><p>Respiró hondo, y no sin antes devolverle a su instructora una última sonrisa, dejó ir la tabla de despegue,entregándose al viento que ahora no parecía querer antagonizarla más. Se tomó un segundo para disfrutarlo antes de recurrir al gran botón en su brazo. Se encendió el propulsor, se desplegaron las alas, y sin perder la sonrisa, se volvió una con el viento.</p>'
        }
    ]


let tituloHead = document.getElementsByTagName("title");
let tituloBody = document.getElementById("ObraTitulo");
let contenido = document.querySelector(".contenido");
let autor = document.querySelector(".autor");

//Siempre que entro en este archivo es porque alguien quiso ver una obra
//Por lo tanto, cuando alguien esta en index o categoria, van a apretar un link/boton, ser llevados a esta pagina, y tienen que venir con un.. argumento, una key para identificar en que obra estamos
let key;
//let obra = obras.find(element => element.titulo == key);
let obra = obras[2];

tituloHead.textContent = obra.titulo;
tituloBody.textContent = obra.titulo;
contenido.innerHTML = obra.contenido;

let linkAutor = obra.autor.replace(/\s/g, ''); // la primera letra esta en mayuscula y en la pagina no, pero parece que no es case sensitive
autor.innerHTML = 'Autor: <a class="nav-link" href="autores/' + linkAutor + '.html">' + obra.autor + '</a>';
// igual seguro que termino haciendo una pagina de autor generico y cargandola dinamicamente
let guardado = localStorage.getItem(key);
if(!guardado){
    guardado = {
        meGusta: 0,
        descargas: 0,
        reseñas: [],
    }
    localStorage.setItem(key, JSON.stringify(guardado));
}

let btnMG = document.getElementById("btnMeGusta");
btnMG.addEventListener("click", clickMG);
function clickMG() {
    contMG.textContent = ++guardado.meGusta;
    localStorage.setItem(key, JSON.stringify(guardado))
}

let btnDescargar = document.getElementById("btnDescargar");
btnDescargar.addEventListener("click", clickDescargar);
function clickDescargar() {
    contMG.textContent = ++guardado.descargas;
    localStorage.setItem(key, JSON.stringify(guardado))
}

