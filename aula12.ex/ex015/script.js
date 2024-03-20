function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'fotocriancamenino.png')
            } else if (idade < 21) {
                img.setAttribute('src','fotojovemhomem.png')
            } else if (idade < 45) {
                img.setAttribute('src', 'fotoadulto.png')
            } else {
                img.setAttribute('src', 'fotoidoso.png')
                genero = 'Idoso'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'fotocriancamenina.png')
            } else if (idade < 21) {
                img.setAttribute('src','fotojovemulher.png')
            } else if (idade < 45) {
                img.setAttribute('src', 'fotoadulta.png')
            } else {
                img.setAttribute('src', 'fotoidosa.png')
                genero = 'Idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}