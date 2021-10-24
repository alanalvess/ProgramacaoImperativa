// Criar um array de nomes, que possua dois índices com o nome Maria. 
let pessoas = ['Maria', 'João', 'José', 'Luiza', 'Letícia', 'Maria', 'Joaquina', 'Francisco'];

// Utilizar o .filter() para obter apenas esses dois índices com o nome Maria.
let maria = pessoas.filter(el=>el=='Maria');

console.log(maria)