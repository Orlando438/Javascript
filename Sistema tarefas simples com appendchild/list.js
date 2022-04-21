//mudar cor = item.classList.toggle("itemDoCSS");
// deletando item: item.classList.add("delete");
// verifica se enter foi pressionado = event.which === 13
//exibindo resultado = appendchild no li criando o elemento texto da entrada.value

var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function verificaInput() {
    return input.value.length;
}

function CriaLista(){
    console.log("passou");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    function mudaCor() {
        li.classList.toggle("done");

    }
    li.addEventListener("click", mudaCor);

    var btnDeletar = document.createElement("button");
    btnDeletar.appendChild(document.createTextNode("x"));
    li.appendChild(btnDeletar);
    btnDeletar.addEventListener("click", deletaritem);

    function deletaritem(){
        li.classList.add("delete");
    }
}



button.addEventListener("click", pelobutton);
input.addEventListener("keypress", porEnter);

function pelobutton(){
if(verificaInput() > 0){
    CriaLista();
}
}

function porEnter(){
    if((verificaInput() > 0) && (event.which === 13)){
        CriaLista();
    }

}

