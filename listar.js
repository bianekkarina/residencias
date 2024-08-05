let residencias = require('./residencias');

function listarResidencia() {
    if (residencias === 0) {
        throw new Error("Nada aqui")
    } else {
        residencias.forEach((residencia, index) => {
            console.log(`${index + 1}. Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}, Dono: ${residencia.dono} `)
            

        })
    }
}

module.exports = listarResidencia