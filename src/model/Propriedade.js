class Propriedade{
    lista = []

    inserirNaLista(valor){
        this.lista.push(valor)
    }

    ordenarLista(lista){
        return lista.sort()
    }

    imprimirLista(lista){
       lista.forEach(item => {
         console.log(item)
       });
    }
}

module.exports = {Propriedade}