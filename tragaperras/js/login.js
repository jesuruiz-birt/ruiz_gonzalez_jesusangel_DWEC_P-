let usersJSONPath = 'data/users.json';

function cargarJSONEnLocalStorage() {
    fetch(usersJSONPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo JSON desde ${usersJSONPath}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            localStorage.setItem("usuarios", JSON.stringify(data)); // Guardar en Local Storage
            console.log("Usuarios cargados y almacenados en Local Storage:", data);
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// Función que valida el usuario y la contraseña
function validarCredenciales() {
    let usuario = document.getElementById("username").textContent;
    let contrasenia = document.getElementById("password").textContent;
    console.log (usuario);
    console.log (contrasenia);

    let usersJSON = []
    let users = localStorage.getItem("usuarios");
    usersJSON = JSON.parse(users);
    
    //console.log (localStorage.getItem("usuarios"));

    console.log (usersJSON);
/*
    array.forEach(_usersJSON => {
        if (usersJSON.username == localStorage.username) {
            console.log ("El usuario es correcto");
        } else if(sersJSON.username == localStorage.username) {
            
        }
    });
*/
    let i;
    for (i = 0 ; i < usersJSON.length; i++) {
        console.log(usersJSON);
    }
}

cargarJSONEnLocalStorage();

document.getElementById("login-button").onclick = validarCredenciales();

