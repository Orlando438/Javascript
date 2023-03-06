  
  function mandar(myMenu, meuresult) {

    var menu = document.getElementById(myMenu);
    Myresult = document.createElement('div').id = meuresult;
    
    if (menu.style.display == 'block') {
      menu.style.display = 'none';
    }
    else {
      const scanner = new Html5QrcodeScanner(Myresult, {
        cameraIdOrConfig: { facingMode: "environment" },
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 20,
      });
      menu.style.display = 'block';

      scanner.render(success, error);
      function success(result) {
        console.log(result);
        scanner.clear();
      }
      
      function error(err) {
        console.error(err);
      }
    }
  }