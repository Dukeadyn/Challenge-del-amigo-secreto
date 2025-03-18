//Agregamos una lista de nombres con dos campos de prueba.
let nombres = ["Nombre 1", "Nombre 2"];

//Para comprobar que la lista funciona la mostramos con un for que agrega elementos li en html.
nombres.forEach(nombre => {
    const lista = document.createElement("li");
    lista.textContent = nombre;
    listaAmigos.appendChild(lista);
});