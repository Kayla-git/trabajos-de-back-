const usuarios = [
    { id: 1, nombre: 'Pepe', email: 'pepe@gmail.com' },
    { id: 2, nombre: 'Pancho', email: 'pancho@gmail.com' },
    { id: 3, nombre: 'Paco', email: 'paco@gmail.com' }
];

function getUsuarioPorId(id, callback) {
    setTimeout(() => {
    const usuario = usuarios.find(user => user.id === id);
    if (usuario) {
        callback(null, usuario);
    } else {
        callback("Usuario no encontrado", null);
    }
    }, 1000);
}

getUsuarioPorId(2, (error, usuario) => {
    if (error) {
    console.log(error);
    } else {
    console.log("Usuario encontrado:", usuario);
    }
});

getUsuarioPorId(4, (error, usuario) => {
    if (error) {
      console.log(error); // Usuario no encontrado
    } else {
    console.log("Usuario encontrado:", usuario);
    }
});
