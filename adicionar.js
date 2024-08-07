let residencias = require('./residencias');

function adicionarResidencia(residencia) {
    residencia.id = residencias.length + 1
    residencias.push(residencia)
}

module.exports = adicionarResidencia