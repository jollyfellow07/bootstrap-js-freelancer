document.getElementById("submit").addEventListener("click", prezzo);

function prezzo(event){
    event.preventDefault();
    let ore = document.getElementById("ore").value;
    parseInt(ore);
    

  let lavoro = document.getElementById("lavoro").value;
   console.log(lavoro);
   
    let risultato;


    let coupon = document.getElementById("inputSconto").value;
    let sconto = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];

       if(lavoro == "1"){
            
            risultato = 20.5*ore;

        } else if(lavoro == "2"){

                risultato=15.3*ore;

                    }else if(lavoro == "3"){
                        risultato = 33.6*ore;
                    }


         for(let i=0; i < sconto.length; i++){
                if((coupon == sconto[i]) && (lavoro =="1")){
                    risultato = ((20.5*ore)*0.75);
                     
                } else if ((coupon == sconto[i]) && (lavoro=="2")){
                risultato = ((15.3*ore)*0.75);
                
                }else if ((coupon == sconto[i]) && (lavoro=="3")){
                    risultato = ((33.6*ore)*0.75);
                   
                }
                
         }
            

            
  /*approssimo il risultato*/
  
risultato = risultato.toFixed(2);
document.getElementById("prezzoFinale").innerHTML = risultato + "\u20AC"; 

        }
