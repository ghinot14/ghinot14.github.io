var btn1 = document.getElementById("boton");
var btn2 = document.getElementById("boton1");
var btn3 = document.getElementById("boton2");
var btn4 = document.getElementById("boton3");
var btn5 = document.getElementById("boton4");
var btn6 = document.getElementById("boton5");
var btn7 = document.getElementById("boton6");
var btn8 = document.getElementById("boton7");

var txt1 = document.getElementById("texto");
var txt2 = document.getElementById("texto1");
var txt3 = document.getElementById("texto2");
var txt4 = document.getElementById("texto3");
var txt5 = document.getElementById("texto4");
var txt6 = document.getElementById("texto5");
var txt7 = document.getElementById("texto6");
var txt8 = document.getElementById("texto7");

var colorbtn = document.getElementById("colorear");
    colorbtn.onclick = colorear;
var flag = 1;
var btnext = document.getElementById("extraer");
    btnext.onclick = extdatos;

    function colorear(){
        if(flag){
            btn1.style.background = "#e9520c";
            btn2.style.background = "#e9520c";
            btn3.style.background = "#e9520c";
            btn4.style.background = "#e9520c";
            btn5.style.background = "#e9520c";
            btn6.style.background = "#485cf5";
            btn7.style.background = "#485cf5";
            btn8.style.background = "#485cf5";
            flag = 0;
        }else{
            btn1.style.background = "#485cf5";
            btn2.style.background = "#485cf5";
            btn3.style.background = "#485cf5";
            btn4.style.background = "#485cf5";
            btn5.style.background = "#485cf5";
            btn6.style.background = "#e9520c";
            btn7.style.background = "#e9520c";
            btn8.style.background = "#e9520c";
            flag = 1;
        }
    }
    function extdatos(){
       var extraer = txt1.value.split(' ');
       txt3.value = extraer[0];
       txt4.value = extraer[1];

       if(extraer[3]!=null)
       txt5.value = extraer[2] +" "+ extraer[3];
       else
       txt5.value = extraer[2];
       
       txt6.value = (txt3.value.length) + (txt4.value.length)+" caracteres";

       var fecha = new Date();
       var anioact = fecha.getFullYear();
       var extfecha = txt2.value.split('-');
       txt7.value = (anioact - extfecha[0])+" años";
       var mes = extfecha[1];

       txt8.value = mesplb(mes);

       function mesplb(mes){
           meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
           return meses[mes-1];
       }

    }
