function parimp(n) {
    if(n%2 == 0 ) {
        return 'par'
    } else { 
        return 'ímpar'
    }
}
let num = parimp(9)
console.log(`${num}`)