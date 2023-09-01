const { Propriedade } = require('../model/Propriedade.js');
const prompt = require('prompt-sync')();

let opcao;

const listaPropriedades = new Propriedade()

do {
  opcao = prompt('Insira uma propriedade CSS ou digite "SAIR" para imprimir a lista: ');
  if(opcao.toLocaleUpperCase() != 'SAIR') {
    if(isNaN(opcao)) {
        console.log(`\nA propriedade "${opcao}" foi inserida na lista.\n`)
    listaPropriedades.inserirNaLista(opcao)
    }else{
        console.log(`\nO valor "${opcao}" não é um valor válido. Favor inserir novamente.\n`)
    }
  }
} while (opcao.toLocaleUpperCase() != 'SAIR');

const listaOrdenada = listaPropriedades.ordenarLista(listaPropriedades.lista)

if (listaPropriedades.lista.length > 0){
    console.log(`\n****************************\n`)
    listaPropriedades.imprimirLista(listaOrdenada)
    console.log(`\n****************************`)
}else{
    console.log(`\n****************************\n`)
    console.log(`Lista vazia.`)
    console.log(`\n****************************`)
}
