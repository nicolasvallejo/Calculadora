   var operaciona = 0;
   var operacionb = 0;
   var operacion = "";
   var resultado = 0;
   var isSign = false;


   var teclas = document.getElementsByClassName('tecla');
   var display = document.getElementById('display')
   display.innerHTML = '0';



    var resultado = document.getElementById('sign');
    var reset = document.getElementById('on');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicacion = document.getElementById('por');
    var division = document.getElementById('dividido');
    var igual = document.getElementById('igual');
    var punto = document.getElementById('punto');
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



    Array.from(teclas).map(function(t){
    	// Evento mousedown de las teclas
    	t.addEventListener('mousedown', function(){
    	  t.style = "padding:2px";
    	});

    	// Evento mouseup de las teclas
    	t.addEventListener('mouseup', function(){
    	  t.style = "padding:0px";
    	});

    	// Evento click de las teclas
    	t.addEventListener('click', function(){
    	  TeclaClick(t);
    	});
    });






    uno.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "1"
      }

    }


    dos.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "2"
      }
    }
    tres.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "3"
      }
    }
    cuatro.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "4"
      }
    }
    cinco.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "5"
      }
    }
    seis.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "6"
      }
    }
    siete.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "7"
      }
    }
    ocho.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "8"
      }
    }
    nueve.onclick = function(){
      if(display.innerHTML == "0"){
        display.innerHTML = "";
      }
      if(display.innerHTML.length >= 8){
      }else{
      display.innerHTML += "9"
      }
    }
    cero.onclick = function(){
      display.innerHTML += "0"
    }

    suma.onclick = function(){
      operaciona = display.innerHTML;
      operacion = "+";
      display.innerHTML = "";
    }

    resta.onclick = function(){
      operaciona = display.innerHTML;
      operacion = "-";
      display.innerHTML = "";
    }

    multiplicacion.onclick = function(){
      operaciona = display.innerHTML;
      operacion = "*";
      display.innerHTML = "";
    }

    division.onclick = function(){
      operaciona = display.innerHTML;
      operacion = "/";
      display.innerHTML = "";

    }
    igual.onclick = function(){
        operacionb = display.innerHTML;
        if(operacion == "+"){
        resultado = parseFloat(operaciona) + parseFloat(operacionb);
        }
        if(operacion == "-"){
        resultado = parseFloat(operaciona) - parseFloat(operacionb);
        }
        if(operacion == "*"){
        resultado = parseFloat(operaciona) * parseFloat(operacionb);
        }
        if(operacion == "/"){
        resultado = parseFloat(operaciona) / parseFloat(operacionb);
        }
        display.innerHTML = resultado

  }


    on.onclick = function(){
      display.innerHTML = "0"
    }
    sign.onclick = function(){
      isSign = !isSign;
      if(isSign && display.innerHTML!="0"){
        display.innerHTML = "-" + display.innerHTML;
      }else{
        display.innerHTML =
        display.innerHTML.slice(1);
      }
    }
