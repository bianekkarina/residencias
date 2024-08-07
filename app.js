const prompt = require('prompt-sync')();

const adicionarResidencia = require('./adicionar');
const listarResidencia = require('./listar');
const atualizarResidencia = require('./editar');
const deletarResidencia = require('./deletar');

function exibirMenu() {
  console.log(`
      Bem Vindo ao Menu!
 1 - Adicionar uma residencia
 2 - Listar todas as residencias
 3 - Atualizar uma residencia
 4 - Deletar uma residencia
 5 - Sair
  `)

  let escolha = prompt("Escolha uma opção: ")

  switch (escolha) {
    case '1':
      let bairro = prompt("Informe o nome do bairro: ")
      let rua = prompt("Informe o nome da rua: ")
      let numero = prompt("Informe o número da casa: ")

      let donos = []
      var dono
      while((dono = prompt("Informe o dono da residência: "))) {
        donos.push(dono)
      }
    
      adicionarResidencia({bairro, rua, numero, dono: donos})
      console.log('Residência cadastrada com sucesso!')
      exibirMenu()
      break
    case '2': 
      listarResidencia()
      exibirMenu()
      break
    case '3':
      listarResidencia();
      var id = parseInt(prompt('Escolha a residencia para editar: ')) 
      const novoBairro = prompt('Novo bairro: ');
      const novaRua = prompt('Nova rua: ');
      const novoNumero = prompt('Novo numero: ');
      let novoDonos = []
      while ((dono = prompt('Novo dono: '))) {
        novoDonos.push(dono)
      }

      atualizarResidencia(id, { bairro: novoBairro, rua: novaRua, numero: novoNumero, dono: novoDonos });
      console.log('Residencia atualizada com sucesso!');
      exibirMenu();
      break;
    case '4':
        listarResidencia()
        id = parseInt(prompt('Número da residencia a deletar: '))
        deletarResidencia(id);
        console.log('Residencia deletada com sucesso!');
        exibirMenu();
        break;
    case '5':
      console.log('Até a pŕoxima!')
      break
    default:
      throw new Error("Opção inválida!")
  }
}

exibirMenu()