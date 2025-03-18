//Agregamos una lista de nombres con dos campos de prueba.
let nombres = ["Nombre 1", "Nombre 2"];

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