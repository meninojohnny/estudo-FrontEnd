function Girar() {
  var d = new Date()
  var s = d.getSeconds()
  var hr = d.getHours()
  var m = d.getMinutes()
  document.querySelector('.p1').style.transform = `rotate(${s * 6}deg)`
  document.querySelector('.p2').style.transform = `rotate(${hr * 30}deg)`
  document.querySelector('.p3').style.transform = `rotate(${m * 6}deg)`
  document.querySelector('.digital').innerHTML = `${hr}:${m}:${s}`
}

var a = setInterval(Girar, 1000)