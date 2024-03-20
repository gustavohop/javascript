var idade = 20
console.log(`Voce tem ${idade} anos.`)
    if (idade < 16) {
        console.log('Voto Nao Obrigatorio')
    } else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
    } else if (idade > 18) {
        console.log('Voto Obrigatorio')
    }