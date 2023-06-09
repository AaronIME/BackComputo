const db = require('../../DB/mysql');

const tabla = 'permisos_has_roles';

function todos(){

    return db.todos(tabla);
}

function uno(id){

    return db.unoCompuesto(tabla, id);
}

function agregar(body) {
    return db.agregarCompuesto(tabla, body);
}

function eliminar(body){

    return db.eliminarCompuesto(tabla, body);
}

module.exports = {
    todos,uno,agregar,eliminar
}