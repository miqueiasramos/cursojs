var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora <= 12 && hora >= 6) {
    console.log('Bom dia.')
} else if(hora > 12 && hora <= 18) {
    console.log('boa tarde.')
} else if(hora > 18 && hora <= 24) {
    console.log('boa noite.')
} else if(hora >= 0 && hora <=5)
    console.log('Boa madrugada.')
    else {
    console.log('Horário inexistente, tente novamente!')
}