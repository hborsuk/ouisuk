var animationState = "none"
function suk() {
    var elem = document.getElementById("animateSuk"); 
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
//        elem.style.left = pos + 'px'; 
      }
    }
}

function oui() {
    var elem = document.getElementById("animateOui"); 
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
//        elem.style.left = pos + 'px'; 
      }
    }
}

function reverseSuk() {
    var elem = document.getElementById("animateSuk"); 
    var pos = 600;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + 'px'; 
//        elem.style.left = pos + 'px'; 
      }
    }
}

function reverseOui() {
    var elem = document.getElementById("animateOui"); 
    var pos = 600;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + 'px'; 
//        elem.style.left = pos + 'px'; 
      }
    }
}

function animate()
{
    if (animationState == "none")
    {
        suk()
        animationState = "suk"
    }
    else if(animationState == "suk")
    {
        oui()
        reverseSuk()
        animationState = "reversed"
    }
    else if(animationState == "reversed")
    {
        reverseOui()
        suk()
        animationState = "suk"
    }
    else
    {
        return "error"
    }
    
}