function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var body = window.document.body;
    msg.innerHTML = `Agora são exatamente ${hora} horas`
        if ( hora <= 12 ) {
            msg.innerHTML = `Agora são ${hora}`
            body.style.background = "#e2cd9f"
            img.src = 'manhã.png'
        } else if (hora <=18 ) {
            msg.innerHTML = `Agora são ${hora}`
            body.style.background = "#b9846f"
            img.src = 'tarde.png'
        } else{
            msg.innerHTML = `Agora são ${hora}`
            body.style.background = "#515154"
            img.src = 'noite.png'
        }
}
         
