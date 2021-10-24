console.log("O método Join junta os elementos pelo separador especificado.")
let compras = ['maça', 'banana', 'pêra', 'uva', 'goiaba', 'mamão', 'abacaxi']
let separadosPorTraço = compras.join('-')
console.log("Ex.: ", separadosPorTraço)

console.log("O método Pop elemina o último elemento do array")
let ultimoItem = compras.pop()
console.log("Ex.: ", compras)
console.log("Item eliminado - ", ultimoItem)

console.log("O método Push adiciona um ou mais itens ")
compras.push('melancia', 'coco')
console.log("Ex.: ", compras)

console.log("O método Shift elimina o primeiro item do array")
let primeiroItem = compras.shift()
console.log("Ex.: ", compras)
console.log("Item eliminado - ", primeiroItem)

console.log("O método Unshift adiciona um ou mais itens ao início do array")
compras.unshift('melão', 'maracujá')
console.log("Ex.: ", compras)