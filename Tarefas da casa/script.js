var meninos = 0
var tasks = 0
var numeros = 0
var texto = document.getElementById('texto')

function GerarPessoas() {
  var pessoas1 = []
  var pessoas = document.getElementsByName('pessoas')
  for (c = 0;c < (pessoas.length);c++) {
    if (pessoas[c].checked) {
      pessoas1.push(pessoas[c].value)
    }
  }
  return pessoas1
}

function GerarTarefas() {
  var tarefas1 = []
  var tarefas = document.getElementsByName('task')
  for (c = 0;c < (tarefas.length);c++) {
    if (tarefas[c].checked) {
      tarefas1.push(tarefas[c].value)
    }
  }
  return tarefas1
}

function GerarNumero() {
  meninos = GerarPessoas()
  return Math.floor(Math.random() * (meninos.length))
}

function Gerar() {
  meninos = GerarPessoas()
  tasks = GerarTarefas()
  if (meninos.length == tasks.length && meninos.length !== 0) {
    texto.style.display = 'flex'
    var controle = []
    texto.innerHTML = ''
  //var numeros = GerarNumero()
    for (c = 0;c < (meninos.length);c++) {
      numero = Math.floor(Math.random() * (meninos.length))
      while (controle.indexOf(numero) !== -1) {
        numero = Math.floor(Math.random() * meninos.length)
      }
      controle.push(numero)
      texto.innerHTML += `<p class="p1"><strong class=strg1>${meninos[c]}:</strong> <strong>${tasks[numero]}</strong></p>`
    }
  } else {
    texto.style.display = 'none'
  }
}