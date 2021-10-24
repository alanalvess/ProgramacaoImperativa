// Criar um módulo que exporte uma função. 

function diaBonito(nome){
    return 'olá ' + nome + ', o dia está lindo hoje!'
}

console.log(diaBonito('Alan'))

module.exports = diaBonito

