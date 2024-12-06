function fatorial (n) {
    let num = 1
    for ( let c=n; c > 1; c--) { 
        num *= c
    }
    return num 
}

console.log(fatorial(5))