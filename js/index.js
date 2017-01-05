// Quick note --- This library: http://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js --- It doesn't work very well...
// Just wanted to let you know.

function changeText(id) {
  var replacementText = document.getElementById(id).innerHTML;
  
  //----------------------------------
  // all the text manipulation stuff..
  //----------------------------------  
  if (id == "plus" ||
     id == "minus" ||
     id == "multiply" ||
     id == "divide"){
    document.getElementById("calc-output").innerHTML = "";
  }else if(id == "equals"){
    document.getElementById("calc-output").innerHTML = "";
  }
  else{
    document.getElementById("calc-output").innerHTML += replacementText;
  }
}

function clearText(){
  document.getElementById("calc-output").innerHTML = "";
  document.getElementById("calc-full-output").innerHTML = "";
}

function allText(id){
  var replacementText = document.getElementById(id).innerHTML;
  document.getElementById("calc-full-output").innerHTML += replacementText;
}

function answer(result){
  document.getElementById("calc-full-output").innerHTML = result;
}

//-------------------------------------------------------------------------------------------------||||
// all the actual calculations
// the only reason my functions aren't named consistently is because the code wouldn't work if like
// I had the function called divide or multiply. I guess those are functions built into javascript.
//-------------------------------------------------------------------------------------------------||||

function calculateNumbers(){
  var calculate = document.getElementById("calc-full-output").innerHTML;
  var arr = [];
  var instances = [];
  if(calculate.indexOf("+") !== -1){
    for(var i=0; i<calculate.length; i++) {
      if (calculate.charAt(i) === "+"){
       instances.push(i); 
       arr = calculate.split(calculate.charAt(i));
      } 
  }
  add(arr);
  }
  else if(calculate.indexOf("-") !== -1){
    for(var i=0; i<calculate.length; i++) {
      if (calculate.charAt(i) === "-"){
       instances.push(i); 
       arr = calculate.split(calculate.charAt(i));
      } 
  }
  subtract(arr);
  }
   else if(calculate.indexOf("/") !== -1){
    for(var i=0; i<calculate.length; i++) {
      if (calculate.charAt(i) === "/"){
       instances.push(i); 
       arr = calculate.split(calculate.charAt(i));
      } 
  }
  
  division(arr);
  }
  else if(calculate.indexOf("*") !== -1){
    for(var i=0; i<calculate.length; i++) {
      if (calculate.charAt(i) === "*"){
       instances.push(i); 
       arr = calculate.split(calculate.charAt(i));
      } 
  }
  
  multiplication(arr);
  }
   
}

function add(arrayTocalculate){
  var array = [];
  
  for (var i=0; i<arrayTocalculate.length; i++){
    array[i] = parseFloat(arrayTocalculate[i]);
  }
  array = array.reduce(function(a, b){
      return a+b;
    });
  
  answer(array);
}

function subtract(arrayTocalculate){
  var array = [];
  
  for (var i=0; i<arrayTocalculate.length; i++){
    array[i] = parseFloat(arrayTocalculate[i]);
  }
  array = array.reduce(function(a, b){
      return a-b;
    });
  
  answer(array);
}

function division(arrayTocalculate){
  var array = [];
  
  for (var i=0; i<arrayTocalculate.length; i++){
    array[i] = parseFloat(arrayTocalculate[i]);
  }
  array = array.reduce(function(a, b){
      return a/b;
    });
  
  answer(array);
}

function multiplication(arrayTocalculate){
  var array = [];
  
  for (var i=0; i<arrayTocalculate.length; i++){
    array[i] = parseFloat(arrayTocalculate[i]);
  }
  array = array.reduce(function(a, b){
      return a*b;
    });
  
  answer(array);
}



//----------------------------------------------
// initializing all the button clicking stuff..
//----------------------------------------------

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');

var decimal = document.getElementById('decimal');

var equals = document.getElementById('equals');
var clear = document.getElementById('clr');



one.addEventListener("click", function(){changeText(one.id); allText(one.id);}, true);
two.addEventListener("click", function(){changeText(two.id); allText(two.id);}, true);
three.addEventListener("click", function(){changeText(three.id); allText(three.id);}, true);
four.addEventListener("click", function(){changeText(four.id); allText(four.id);}, true);
five.addEventListener("click", function(){changeText(five.id); allText(five.id);}, true);
six.addEventListener("click", function(){changeText(six.id); allText(six.id);}, true);
seven.addEventListener("click", function(){changeText(seven.id); allText(seven.id);}, true);
eight.addEventListener("click", function(){changeText(eight.id); allText(eight.id);}, true);
nine.addEventListener("click", function(){changeText(nine.id); allText(nine.id);}, true);
zero.addEventListener("click", function(){changeText(zero.id); allText(zero.id);}, true);


divide.addEventListener("click", function(){changeText(divide.id); allText(divide.id);}, true);
multiply.addEventListener("click", function(){changeText(multiply.id); allText(multiply.id);}, true);
minus.addEventListener("click", function(){changeText(minus.id); allText(minus.id);}, true);
plus.addEventListener("click", function(){changeText(plus.id); allText(plus.id);}, true);

decimal.addEventListener("click", function(){changeText(decimal.id); allText(decimal.id);}, true);

equals.addEventListener("click", function(){changeText(equals.id); calculateNumbers();}, true);
clear.addEventListener("click", function(){clearText(clear.id);}, true);



//------------------------------------------------------------------
// the keyboard shortcuts, really happy with the way these came out.
//------------------------------------------------------------------
document.addEventListener("keydown", function(key) {
  
  switch(key.which){
    case 8: // TODO: make this delete the last character only.
      clearText();
      break;
    case 13:
      changeText(equals.id);
      calculateNumbers();
      break;
    case 48:
      changeText(zero.id); 
      allText(zero.id);
      break;
    case 49:
      changeText(one.id); 
      allText(one.id);
      break;
    case 50:
      changeText(two.id); 
      allText(two.id);
      break;
    case 51:
      changeText(three.id); 
      allText(three.id);
      break;
    case 52:
      changeText(four.id); 
      allText(four.id);
      break;
    case 53:
      changeText(five.id); 
      allText(five.id);
      break;
    case 54:
      changeText(six.id); 
      allText(six.id);
      break;
    case 55:
      changeText(seven.id); 
      allText(seven.id);
      break;
    case 56:
      changeText(eight.id); 
      allText(eight.id);
      break;
    case 57:
      changeText(nine.id); 
      allText(nine.id);
      break;
    case 67:
      clearText();
      break;
    case 187:
      changeText(plus.id); 
      allText(plus.id);
      break;
    case 56:
      changeText(multiply.id); 
      allText(multiply.id);
      break;
    case 191:
      changeText(divide.id); 
      allText(divide.id);
      break;
    case 189:
      changeText(minus.id); 
      allText(minus.id);
      break;
      
                  }
});