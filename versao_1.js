console.log('Boas vindas ao jogo de BlackJack!')
alert('Boas vindas ao jogo de BlackJack!')
const comecarRodada = confirm('Quer iniciar uma nova rodada?')
const primeiraCartaUsuario = comprarCarta()
const PrimeiraCartaComputador = comprarCarta()

const cartasUsuario = [primeiraCartaUsuario]
const cartasComputador = [PrimeiraCartaComputador]
let textoCartasUsuario = primeiraCartaUsuario.texto
let textoCartasComputador = PrimeiraCartaComputador.texto

let valorCartasUsuario = primeiraCartaUsuario.valor
let valorCartasComputador = PrimeiraCartaComputador.valor

let continuaJogo = true

function puxarCartas() {
  const cartaUsuario = comprarCarta()
  const cartaComputador = comprarCarta()

  cartasUsuario.push(cartaUsuario)
  cartasComputador.push(cartaComputador)
  textoCartasUsuario += ` ${cartaUsuario.texto}`
  textoCartasComputador += ` ${cartaComputador.texto}`
  valorCartasUsuario += cartaUsuario.valor
  valorCartasComputador += cartaComputador.valor

  console.log(`Usuário - cartas: ${textoCartasUsuario} - pontuação ${valorCartasUsuario}`)
  console.log(`Computador - cartas: ${textoCartasComputador} - pontuação ${valorCartasComputador}`)
}

function verificaResultado() {
  if (valorCartasUsuario < 21 && valorCartasComputador < 21) {
    puxarCartas()
    verificaResultado()

  } else if ((valorCartasUsuario === 21 && valorCartasComputador !== 21) || (valorCartasUsuario < 21 && valorCartasComputador > 21)) {
    console.log('O usuário ganhou!')

    continuaJogo = false
    return ''

  } else if ((valorCartasComputador === 21 && valorCartasUsuario !== 21) || (valorCartasComputador < 21 && valorCartasUsuario > 21)) {
    console.log('O computador ganhou!')

    continuaJogo = false
    return ''

  } else if (valorCartasUsuario >= 21 && valorCartasComputador >= 21) {
    console.log('Empate!')

    continuaJogo = false
    return ''
  }
}

if (comecarRodada) verificaResultado()
else console.log('O jogo acabou')
