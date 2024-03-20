function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora sao ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#f4aa7f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#5b7c9c'
    } else if (hora >= 18 && hora <= 24) {
        img.src = 'noite.png'
        document.body.style.background = '#584064'
    }
}
