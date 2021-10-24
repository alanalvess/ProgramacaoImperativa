// Criar um array de números
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
let numeros = [1, 5, 9, 3, 7];

// Utilizar a função .reduce() para devolver uma string com os números formatados.
let string = numeros.reduce(function(acumulador, numero){return acumulador + ' - ' + numero});

console.log(string);