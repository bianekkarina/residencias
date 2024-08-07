let residencias = require('./residencias');

function atualizarResidencia(id, novaResidencia) {
    let index = residencias.findIndex(residencia => residencia.id === id) 
    if (index !== -1) {
     residencias[index] = {id: id, ...novaResidencia}
    }
 }
module.exports = atualizarResidencia
