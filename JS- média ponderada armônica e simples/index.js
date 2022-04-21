
var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");
var letra = document.getElementById("letra");


document.getElementById("enviar").addEventListener("click", () => {
    event.preventDefault("enviar");
    if (letra.value == "a"){
        var calcula = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3;
        }


    else if(letra.value =="p"){
        var calcula = (parseFloat(nota1.value)*5 + parseFloat(nota2.value)*3 + parseFloat(nota3.value)*2)/10;

    }

    else if(letra.value == "h") {
        var calcula = 3/(parseFloat(1/ nota1.value) + parseFloat(1/ nota2.value) + parseFloat(1 /nota3.value));
    }

    else {
        alert("Algo de errado não está certo");
    }

    alert(calcula.toPrecision(3));
    
});







