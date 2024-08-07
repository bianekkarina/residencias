let residencias = require('./residencias');

function deletarResidencia(id) {
    let index = residencias.findIndex(residencia => residencia.id === id) 
     if (index !== -1) {
        residencias.splice(index, 1)
     }
 }
 
module.exports = deletarResidencia