// Atividade proposta: transforamar as funções abaixo em arrow functions:
// Function 1
function print (mensagem){
    console.log(mensagem)
}

print ("olá, bom dia")

// Function 2
function soma (n1, n2){
    return n1+n2
}
console.log(soma(10, 10))

// Respostas abaixo:
// Function 1
let print1 = () => console.log("olá, bom dia")

print1()

// Function 2
let soma1 = (n1, n2) => n1 + n2

console.log(soma1(10, 10))