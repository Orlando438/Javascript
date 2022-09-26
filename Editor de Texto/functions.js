function negrito() {
    document.getElementById("texto").style.fontWeight = "bold";
}
function italic() {
    document.getElementById("texto").style.fontStyle = "italic";
}





function esquerda() {
    document.getElementById("texto").style.textAlign = "left";
}
function centro() {
    document.getElementById("texto").style.textAlign = "center";
}
function direita() {
    document.getElementById("texto").style.textAlign = "right";
}



function maiusculo() {
    document.getElementById("texto").style.textTransform = "uppercase";
}
function minusculo() {
    document.getElementById("texto").style.textTransform = "lowercase";
}
function mm() {
    document.getElementById("texto").style.textTransform = "capitalize";
}




function limpar() {
document.getElementById("texto").style.fontWeight = "normal";
document.getElementById("texto").style.fontStyle = "normal";
document.getElementById("texto").style.textAlign = "left";
document.getElementById("texto").style.textTransform = "none";
document.getElementById("texto").value="";
}


