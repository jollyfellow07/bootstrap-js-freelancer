document.getElementById("submit").addEventListener("click", prezzo);

let sconto = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];
let couponUsato = [];



function prezzo(event){
    event.preventDefault();
    let ore = document.getElementById("ore").value;
    parseInt(ore);
    

  let lavoro = document.getElementById("lavoro").value;
   console.log(lavoro);
   
    let risultato = 0;


    let coupon = document.getElementById("inputSconto").value;
    

                    switch(lavoro){
                        case "0":
                            // No option selected
                            alert("Attenzione non hai selezionato un tipo di offerta");
                            return;
                        case "1":
                            // Backend offer type
                            risultato = 20.5 * ore;
                            break;
                        case "2":
                            // Frontend offer type
                            risultato = 15.3 * ore;
                            break;
                        case "3":
                            // Project Analysis offer type
                            risultato = 33.6 * ore;
                    }

                    // Verifico e applico eventuali sconti
         let couponPresente = false;
         for(let i=0; i < sconto.length; i++){
            if(sconto[i] == coupon){
                couponPresente = true;
    
                // BONUS: Rimouvere il codice sconto una volta usato,
                // attenzione a non riassegnare l'array, perche splice
                // ritorna l'elemento rimosso
                sconto.splice(i, 1); 
    
                // Aggiungo il codice sconto usato all'array di codici sconto usati
                couponUsato.push(coupon);
    
                break;
            }
                
         }
            
        // Se ho scritto un codice sconto (coupon != "") E(&&) il mio codice sconto non è stato trovato (!couponpresente)
    if((coupon != "") && !couponPresente){
        // allora ...

        if(couponUsato.includes(coupon)){
            alert("Il codice sconto inserito è gia stato usato");
        } else {
            alert("Il codice sconto inserito non è valido");
        }

        // BONUS: Far diventare il codice sconto errato di colore rosso
        document.getElementById("inputSconto").classList.add("text-danger");
    }

    // Se c'è il codice valido allora applico lo sconto
    if(couponPresente){
        risultato = 0.75 * risultato;
    }


  /*approssimo il risultato*/
  
risultato = risultato.toFixed(2);
document.getElementById("prezzoFinale").innerHTML = risultato + "\u20AC"; 

        }
