var input1 = document.getElementById('input-list')
var lista = document.getElementById('lista')
var lixeira = '<span class="material-symbols-outlined">delete</span>'
var tarefas = []

function NovaTarefa() {
  var nome = document.getElementById('input-list').value
  tarefas.push(nome)
  Mostrar()
}

function Mostrar() {
  input1.value = ''
  lista.innerHTML = ''
  for (i in tarefas) {
    lista.innerHTML += `<li><p>${tarefas[i]}</p><button class='bnt2' id='${i}' onclick="Delete(id)">${lixeira}</button></li>`
  }
}

function Delete(data) {
  var index = tarefas.indexOf(tarefas[data])
  tarefas.splice(index, 1)
  Mostrar()
}
