// Lista para almacenar los amigos ingresados
let amigos = [];

// Capturar elementos del DOM
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista de amigos en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    // Limpiar la lista para evitar duplicados
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada amigo como un elemento <li>
    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Debe haber al menos un amigo en la lista para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSeleccionado) {
    // Limpiar cualquier resultado anterior
    resultadoSorteo.innerHTML = "";

    // Crear y agregar el mensaje con el nombre sorteado
    const p = document.createElement("p");
    p.textContent = `El amigo sorteado es: ${amigoSeleccionado}`;
    resultadoSorteo.appendChild(p);
}