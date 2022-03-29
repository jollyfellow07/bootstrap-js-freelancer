document.getElementById("submit").addEventListener("click", prezzo);

function prezzo(event){
    event.preventDefault();
    let ore = document.getElementById("ore").value;
    parseInt(ore);
    let backend = document.getElementById("backend").value;
    let frontend = document.getElementById("frontend").value;
    let analisi = document.getElementById("analisi").value;
    let risultato;

    coupon = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"]; 
if(backend){
    risultato = 20.5*ore;
} else if(frontend){
    risultato=15.3*ore;
}else if(analisi){
    risultato = 15.3*ore;
} else {
    alert("seleziona una tipologia di lavoro");
}
document.getElementById("prezzoFinale").innerHTML = risultato; 
}

