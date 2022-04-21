var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var corpo = document.querySelector(".corpo");
corpo.style.background = "white";


button1.addEventListener('click', (e) => {

  if (corpo.style.background == "red"){
       alert("A cor já é esta");
  }else {
    corpo.style.background = "red";
  }

})


button2.addEventListener('click', (e) => {

  if (corpo.style.background == "blue"){
    alert("A cor já é esta");
}else {
 corpo.style.background = "blue";
}

})

button3.addEventListener('click', (e) => {

  if (corpo.style.background == "black"){
    alert("A cor já é esta");
}else {
 corpo.style.background = "black";
}

})

button4.addEventListener('click', (e) => {

  if (corpo.style.background == "white"){
    alert("A cor já é esta");
}else {
 corpo.style.background = "white";
}

})

  



