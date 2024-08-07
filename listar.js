let residencias = require('./residencias');

function listarResidencia() {
    if (residencias === 0){
        throw new Error("Nada aqui!")
    } else {
        for (let i = 0; i < residencias.length; i++) {
            const residencia = residencias[i];
            console.log(`
            ID: ${residencia.id}
            Bairro: ${residencia.bairro},
            Rua: ${residencia.rua},
            Número: ${residencia.numero},
            Donos: ${residencia.dono}
            `);
            
            for (let j = 0; j < residencia.dono.length; j++) {
                console.log(`
                ${j+1}. ${residencia.dono[j]}`);
            }
        }
    }
}

module.exports = listarResidencia