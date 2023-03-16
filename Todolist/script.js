var input1 = document.getElementById('input-list');
var lista = document.getElementById('lista');
var lixeira = '<span class="material-symbols-outlined">delete</span>';
var tarefas = [];

function NovaTarefa() {
  input1.style.border = 'none';
  var nome = document.getElementById('input-list').value;
  if (nome == '') {
    alert('Digite uma task para prosseguir');
    input1.style.border = '1px solid red';
  } else if (tarefas.indexOf(nome) !== -1) {
    alert('Essa task já existe');
    input1.style.border = '1px solid red';
    input1.value = '';
  } else {
    tarefas.push(nome);
    Mostrar();
  }
}

function Mostrar() {
  input1.value = '';
  lista.innerHTML = '';
  for (i in tarefas) {
    lista.innerHTML += `<li><p>${tarefas[i]}</p><button class='bnt2' id='${i}' onclick="Delete(id)">${lixeira}</button></li>`;
  }
}

function Delete(data) {
  var index = tarefas.indexOf(tarefas[data]);
  tarefas.splice(index, 1);
  Mostrar();
}
