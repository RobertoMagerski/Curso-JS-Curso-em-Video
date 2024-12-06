let txtn = document.getElementById('txtn')
let lista = document.getElementById('seltab')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) { 
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { 
        return false
    }
}

function inLista(n, l) { 
    if(l.indexOf(Number(n)) != -1){
        return true
    }else { 
        return false
    }
}

function adcionar() {
    let num = txtn.value

    if(isNumero(num) && !inLista(num, valores )) {
        let item = document.createElement('option')
        valores.push(Number(num))
        item.text =`Valor ${num} adcionado a lista`
        lista.appendChild(item)
        res.innerHTML = ''
    }else { 
        window.alert('Valor inválido ou ja cadastrado tente outro ')
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores a lista para continuar')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores) { 
            soma += valores[pos] 
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / total 
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}

