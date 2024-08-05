let residencias = require('./residencias');

function deletarResidencia(index) {
    residencias.splice(index, 1);
    }

module.exports = deletarResidencia