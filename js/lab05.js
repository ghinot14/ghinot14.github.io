var gbtn1 = document.getElementById("boton");
var gbtn2 = document.getElementById("boton1");
var gbtn3 = document.getElementById("boton2");
var gbtn4 = document.getElementById("boton3");
var gbtn5 = document.getElementById("boton4");
var gbtn6 = document.getElementById("boton5");
var gbtn7 = document.getElementById("boton6");
var gbtn8 = document.getElementById("boton7");

var colorBtn = document.getElementById("colorear");
    colorBtn.onclick = colorear;
var flag = 1;

    function colorear(){
        if(flag){
            gbtn1.style.background = "#e9520c";
            gbtn2.style.background = "#e9520c";
            gbtn3.style.background = "#e9520c";
            gbtn4.style.background = "#e9520c";
            gbtn5.style.background = "#e9520c";
            gbtn6.style.background = "#485cf5";
            gbtn7.style.background = "#485cf5";
            gbtn8.style.background = "#485cf5";
            flag = 0;
        }else{
            gbtn1.style.background = "#485cf5";
            gbtn2.style.background = "#485cf5";
            gbtn3.style.background = "#485cf5";
            gbtn4.style.background = "#485cf5";
            gbtn5.style.background = "#485cf5";
            gbtn6.style.background = "#e9520c";
            gbtn7.style.background = "#e9520c";
            gbtn8.style.background = "#e9520c";
            flag = 1;
        }
    }

