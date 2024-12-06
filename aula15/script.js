let n = [2, 4, 5, 6]
n.push(1)
n.sort()
console.log(n)
// console.log(`Nosss temos ${n.length} de proposições`)
// console.log(`Nosso primeiro númeor da preposição é ${n[0]}`)

let pos = n.indexOf(5)

if(pos == -1) {
    console.log('Esse valor não foi encontrado')
} else { 
    console.log(`Valor encontrado = ${pos}`)
}