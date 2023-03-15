var input1 = document.getElementById('input-list')
var lista = document.getElementById('lista')
var lixeira = '<span class="material-symbols-outlined">delete</span>'


function NovaTarefa() {
  var nome = document.getElementById('input-list').value
  lista.innerHTML += `<li><p>${nome}</p><button class='bnt2'>${lixeira}</button></li>`
  input1.value = ''
}
