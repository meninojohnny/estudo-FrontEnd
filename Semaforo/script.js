var vermelho = document.querySelector('.vermelho')
var amarelo = document.querySelector('.amarelo')
var verde = document.querySelector('.verde')
var contador = document.querySelector('.contador')

function Mudar() {
    var d = new Date()
    var s = d.getSeconds()

    if (s > 0 && s <=20) {
        vermelho.style.backgroundColor = '#d00000'
        amarelo.style.backgroundColor = 'rgb(61, 54, 54)'
        verde.style.backgroundColor = 'rgb(61, 54, 54)'
    } else if (s > 20 && s <= 30) {
        vermelho.style.backgroundColor = 'rgb(61, 54, 54)'
        amarelo.style.backgroundColor = '#ff7b00'
        verde.style.backgroundColor = 'rgb(61, 54, 54)'
    } else if (s > 30 && s <= 50) {
        vermelho.style.backgroundColor = 'rgb(61, 54, 54)'
        amarelo.style.backgroundColor = 'rgb(61, 54, 54)'
        verde.style.backgroundColor = '#008000'
    } else if (s > 50 && s <= 60) {
        vermelho.style.backgroundColor = 'rgb(61, 54, 54)'
        amarelo.style.backgroundColor = '#ff7b00'
        verde.style.backgroundColor = 'rgb(61, 54, 54)'
    }

    contador.innerHTML = s
  }
  
  var a = setInterval(Mudar, 1000)
