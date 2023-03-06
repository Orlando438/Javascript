const scanner = new Html5QrcodeScanner('reader', {
  qrbox: {
    width: 250,
    height: 250,
  },
  fps: 20,
});

 
function success(result) {
  document.getElementById('EDIT_PESQUISA').value = `${result}`;
  fncPsqSearching();
  scanner.clear();
}

function error(err) {
  console.error(err);
}

function mandar() {
  const menu = document.getElementById('menu');
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
  }
  else {
    menu.style.display = 'block';
    scanner.render(success, error);
  }
}
