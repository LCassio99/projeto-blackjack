const comecarRodada = confirm('Bem-vindo ao jogo de Blackjack! \n quer iniciar uma nova rodada?')

const puxarCartasUsuario = comprarCarta()
const puxarCartasComputador = comprarCarta()

let cartasUsuario = [puxarCartasUsuario]
let cartasComputador = [puxarCartasComputador]
let textoCartasUsuario = puxarCartasUsuario.texto

let valorCartasUsuario = puxarCartasUsuario.valor

let textoCartasComputador = ''
let valorCartasComputador = 0

let continuaJogo = comecarRodada

function puxarCartas() {
   const cartaUsuario = comprarCarta()
   const cartaComputador = comprarCarta()

   textoCartasComputador = ''
   valorCartasComputador = 0

   cartasUsuario.push(cartaUsuario)
   cartasComputador.push(cartaComputador)
   textoCartasUsuario += ` ${cartaUsuario.texto}`
   valorCartasUsuario += cartaUsuario.valor

   for (let i = 0; i < cartasComputador.length - 1; i += 1) {

      textoCartasComputador += ` ${cartasComputador[i].texto}`
      valorCartasComputador += cartasComputador[i].valor
   }

   if (cartasComputador.length === 2 && (valorCartasUsuario === 22 || valorCartasComputador === 22)) {
      const puxarCartasUsuario = comprarCarta()
      const puxarCartasComputador = comprarCarta()

      cartasUsuario = [puxarCartasUsuario]
      cartasComputador = [puxarCartasComputador]
      textoCartasUsuario = `${cartaUsuario.texto}`
      valorCartasUsuario = cartaUsuario.valor
   }
   continuaJogo = confirm(`Suas cartas são ${textoCartasUsuario}. 
A carta revelada do computador é ${textoCartasComputador} 
Deseja comprar mais uma carta?`)
}

function verificaResultado() {
   console.log(cartasComputador)
   console.log(cartasUsuario)

   if ((valorCartasUsuario === 21 && valorCartasComputador !== 21) || (valorCartasUsuario < 21 && valorCartasComputador > 21)) {
      alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${valorCartasUsuario}.
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${valorCartasComputador}
O usuário ganhou!`)

      continuaJogo = false
      return ''

   } else if ((valorCartasComputador === 21 && valorCartasUsuario !== 21) || (valorCartasComputador < 21 && valorCartasUsuario > 21)) {
      alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${valorCartasUsuario}.
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${valorCartasComputador}
O computador ganhou!`)

      continuaJogo = false
      return ''

   } else if (valorCartasUsuario >= 21 && valorCartasComputador >= 21) {
      alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${valorCartasUsuario}.
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${valorCartasComputador}
Empate`)

      continuaJogo = false
      return ''
   } else if (valorCartasUsuario < 21 && valorCartasComputador < 21) {
      if (continuaJogo) puxarCartas()
      else {

         textoCartasComputador = ''
         valorCartasComputador = 0

         for (let i = 0; i < cartasComputador.length; i += 1) {

            textoCartasComputador += ` ${cartasComputador[i].texto}`
            valorCartasComputador += cartasComputador[i].valor
         }

         if (valorCartasUsuario > valorCartasComputador) {
            alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${valorCartasUsuario}.
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${valorCartasComputador}
O usuário ganhou!`)
         } else if (valorCartasComputador > valorCartasUsuario) {
            alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${valorCartasUsuario}.
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${valorCartasComputador}
O computador ganhou!`)
         } else if (valorCartasUsuario === valorCartasComputador) {
            alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${valorCartasUsuario}.
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${valorCartasComputador}
Empate`)
         }
      }

   }
}

while (continuaJogo) {
   verificaResultado()
}

while (!continuaJogo && valorCartasComputador < valorCartasUsuario && valorCartasComputador < 21) {
   textoCartasComputador = ''
   valorCartasComputador = 0

   cartasComputador.push(comprarCarta())

   for (let i = 0; i < cartasComputador.length; i += 1) {

      textoCartasComputador += ` ${cartasComputador[i].texto}`
      valorCartasComputador += cartasComputador[i].valor
   }
}

if (comecarRodada) verificaResultado()
