function idade() {
    var dateatual = new Date();
    var anoatual = dateatual.getFullYear();
    var ano = document.getElementById('ano');
    var res = document.querySelector('div#result');
    
    if (ano.value.length == 0 || Number(ano.value) == anoatual) {
        window.alert('Verifique as informações e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(ano.value)
        res.innerHTML = (`Sua idade é ${idade}`)
        var genero = ''
    }if (fsex[0].checked ) { 
        genero = 'Homem'
    } else if (fsex[1].checked) { 
        genero = 'Mulher'
    }
    res.innerHTML = (`Você é ${genero} e tem ${idade} anos`)
} 