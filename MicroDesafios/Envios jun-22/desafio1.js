// Criar uma função construtora chamada Restaurante > atribuir os parâmetros 'nome do restaurante' e 'cardápio'
// cardapio será um array de strings
// chamar a função entrada() dentro do objeto > trará a mensagem de boas-vindas, informando o nome do restaurante, e o cardápio

function Restaurante(nome, cardapio){
    this.nome=nome,
    this.cardapio=cardapio,
    this.entrada=function(){
        return 'Bem-Vindos ao ' + nome + ', estes são os nossos cardápios: ' + cardapio
    }
}

let restaurante = new Restaurante('iFome',['Entrada', ' Prato Principal', ' Sobremesas'])


console.log(restaurante.entrada())