var agora = new Date()
var hora = agora.getHours()
    console.log(`Agora sao exatamente ${hora} horas.`)
    if (hora < 12) {
        console.log('Bom dia!')
    } else if (hora <= 19) {
        console.log('Boa tarde')
    } else if (hora <= 24) {
        console.log('Boa Noite')
    }