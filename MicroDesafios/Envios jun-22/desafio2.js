// Micro desafio 'Ver Números'
// Criar um array 'numerosPrimos' > atribuir valores a ele. 
// Crir um array 'numeros' > atribuir valores > adicionar 'numerosPrimos' através do spread.

let numerosPrimos = [1,3,5,7,9]
let numeros = [0,...numerosPrimos, 11, 13, 17, 'etc']

console.log(numeros)


// Criar uma função maiorNumero() que receba N parâmetros > retornar o menor número entre eles, utilizando a função Math.min(). 

let maiorNumero=[10,15,5,12,16,22,2,3,45]
console.log(Math.min(...maiorNumero))
