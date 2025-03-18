//lista vacía.
let nombres = [];

//Se eliminaron las comprobaciones y agregamos una constante que refiere a la lista de amigos.
const listaAmigos = document.getElementById("listaAmigos")

//Agregamos una funcion para agregar amigos que usa un if para determinar si la entrada esta vacia.
function agregarAmigo() {
    const nombreAmigo = amigo.value.trim();
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return
    }
    //usamos el metodo push.
    nombres.push(nombreAmigo)
    //Funciona en conjunto con otra funcion.
    actualizarListaAmigos();
    amigo.value = "";
}

//Usamos otra funcion para actualizar la lista de amigos en el HTML con un for.
function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";

    nombres.forEach(nombre => {
        const lista = document.createElement("li");
        lista.textContent = nombre;
        listaAmigos.appendChild(lista);
    });
}

//Agregamos una funcion para sortear amigos con un if para que no se intente sortear una cantidad invalida de amigos.
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("No hay suficientes amigos para sortear.")
        return
    }

    //usamos math.floor y math.random para el numero aleatorio.
    const numeroAleatorio = Math.floor(Math.random() * nombres.length);
    const ganador = nombres[numeroAleatorio]
    //actualizamos el HTML con innerHTML.
    resultado.innerHTML = `<p>¡El amigo ganador es: ${ganador}!</p>`;
}