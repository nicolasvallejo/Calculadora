var operandoa;
var operandob;
var operacion;
function init(){

  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');

  uno.addEventListener('click', function () {
    agregarValor(1);
  });
  dos.addEventListener('click', function () {
    agregarValor(2);
  });
  tres.addEventListener('click', function () {
    agregarValor(3);
  });
  cuatro.addEventListener('click', function () {
    agregarValor(4);
  });
  cinco.addEventListener('click', function () {
    agregarValor(5);
  });
  seis.addEventListener('click', function () {
    agregarValor(6);
  });
  siete.addEventListener('click', function () {
    agregarValor(7);
  });
  ocho.addEventListener('click', function () {
    agregarValor(8);
  });
  nueve.addEventListener('click', function () {
    agregarValor(9);
  });
  cero.addEventListener('click', function () {
    agregarValor(0);
  });
  on.onclick = function(e){
  		resetear();
  }
  suma.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "+";
  		limpiar();
  }
  resta.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "-";
  		limpiar();
  }
  multiplicacion.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "*";
  		limpiar();
  }
  division.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "/";
  		limpiar();
  }
  igual.onclick = function(e){
  		operandob = resultado.textContent;
  		resolver();
  }

  function limpiar(){
  resultado.textContent = "";
  }

  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
}
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}
