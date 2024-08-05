let residencias = require('./residencias');

function atualizarResidencia(index, novaResidencia) {
    residencias[index] = novaResidencia;
    }


module.exports = atualizarResidencia