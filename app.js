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
  let index

  switch (escolha) {
    case '1':
        var bairro = prompt("Informe o nome do bairro: ")
        var rua = prompt("Informe o nome da rua: ")
        var numero = prompt("Informe o número da casa: ")
        var dono = prompt("Informe o dono da residência: ")
    
        adicionarResidencia({bairro, rua, numero, dono})
        console.log('Residência cadastrada com sucesso!')
        exibirMenu()
        break
    case '2': 
      listarResidencia()
      exibirMenu()
      break
    case '3':
        listarResidencia();
        index = parseInt(prompt('Escolha a residencia para editar: ')) - 1;
        const novoBairro = prompt('Novo bairro: ');
        const novaRua = prompt('Nova rua: ');
        const novoNumero = prompt('Novo numero: ');
        const novoDono = prompt('Novo dono: ')
        atualizarResidencia(index, { bairro: novoBairro, rua:
        novaRua, numero: novoNumero, dono: novoDono });
        console.log('Residencia atualizada com sucesso!');
        exibirMenu();
        break;
    case '4':
        listarResidencia()
        index = parseInt(prompt('Número da residencia a deletar: ')) - 1;
        deletarResidencia(index);
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