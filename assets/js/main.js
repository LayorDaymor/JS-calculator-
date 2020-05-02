
const eingabeFeld = document.getElementById("eingabeFeld");



/* Die Numer und sympole */
function add(dieNummer) {
    eingabeFeld.innerHTML += dieNummer
    
}

var backspace = function() {
    
    var rekensom  = document.getElementById('eingabeFeld').innerHTML;
        document.getElementById('eingabeFeld').innerHTML=rekensom.substring(0,rekensom.length -1);
      
}
        


function ce() {
    eingabeFeld.innerHTML=""
    
}

/* gleich */
function gleich() {
    eingabeFeld.innerHTML = eval(eingabeFeld.innerHTML);
    
}

