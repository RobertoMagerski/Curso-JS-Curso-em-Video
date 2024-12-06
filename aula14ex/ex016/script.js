function carregar() { 
    var txtv = document.getElementById('txtv')
    var txtv2 = document.getElementById('txtv2')
    var txtv3 = document.getElementById('txtv3')
    var msg = document.querySelector('div#esp')
    var inicio = Number(txtv.value)
    var fim  = Number(txtv2.value)
    var passo = Number(txtv3.value)

    for (var c = inicio; c <= fim; c += passo) {
        msg.innerHTML += `${c} \u{1F449} `
        
        if (passo <= 0) { 
        window.alert ('Passe inválido considerando passo 1')
    
        passo = 1 
    }
}
    msg.innerHTML += `\u{1F3C1}`
}