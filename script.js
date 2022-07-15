// Destructuring no Javascript

const carro = {
  marca: "Hyundai",
  modelo: "Creta",
  cor: "Preto",
  ano: "2022",
  informacoes: {
    placa: "FYR7745",
    garantia: true,
    km: "0km"
  }
}

/*
const marca = carro.marca;
const modelo = carro.modelo;
const cor = carro.cor;
const informacoes = carro.informacoes.placa
*/

const { marca, modelo, informacoes: { placa }, informacoes: { km }, ...outras_informacoes } = carro;
console.log(marca, placa, outras_informacoes)

// criando destructuring na assinatura da função
const possuiGarantia = ({ informacoes: { garantia } }) => garantia

console.log(possuiGarantia(carro))


// Destructuring em arrays
const top_linguagens = ["Python", "Java", "PHP", "JavaScript", "C++"]

const [, , , linguagem_favorita] = top_linguagens;
console.log(linguagem_favorita)

// Destructuring em argumentos

/* function handleKeyboard(event) {
  console.log(event.key)
}
*/

function handleKeyboard({key}) {
  console.log(key)
}

document.addEventListener('keyup', handleKeyboard)