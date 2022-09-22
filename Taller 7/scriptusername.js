var InputUsername = document.getElementById("aligned-username");

InputUsername.onkeyup = function() {
    // Validate length
    if(InputUsername.value.length >= 10 && InputUsername.value.length <=20) {
      usuario.classList.remove("invalid");
      usuario.classList.add("valid");
    }
    else {
      usuario.classList.remove("valid");
      usuario.classList.add("invalid");
    }
  }
  InputUsername.onfocus = function() {
    document.getElementById("message7").style.display = "block";
  }
  
  InputUsername.onblur = function() {
    document.getElementById("message7").style.display = "none";
  }
