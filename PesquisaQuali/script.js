
function GerarNumero() {
  return Math.floor(Math.random() * 5) * 20
}

function Nao(data) {
  var n1 = GerarNumero()
  var n2 = GerarNumero()
  var bloco = document.getElementById(`${data}`)
  bloco.style.position = 'absolute'
  bloco.style.top = `${n1}%`
  bloco.style.left = `${n2}%`
}

function Sim() {
  alert('SUA RESPOSTA FOI REGISTRADA!!')
}