const readline = require('readline-sync')
function documentos(){
    const pessoa = {}

    pessoa.inputNome = dados()
    pessoa.inputCorrer = correr()

    function dados(){
        return readline.question('Informe o seu nome: ')
    }

    function correr(){

        inputSelectCorrer = ['7:00', '8:00', '9:00']
        inputSelectCorrerValue = readline.keyInSelect(inputSelectCorrer, 'Que horas você costuma correr? ')
        inputSelectCorrerText = inputSelectCorrer[inputSelectCorrerValue]

        return inputSelectCorrerText

    }

    console.log(pessoa)

}
documentos()