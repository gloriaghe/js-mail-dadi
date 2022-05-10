//lista mail di partenza

const listaMail = ["giulio@gmail.com", "gufetta84@mail.it", "dobby87@gmail.com", "bianchi@mail.com", "spiderman@yahoo.it", "pawpatrol92@mail.com", "rossi@gmail.com" ];

const mioOutput = document.querySelector("#esito");
const mioInput = document.querySelector("input");
let mail = false;
const mioBottone = document.querySelector("button");


// chiedere mail
mioBottone.addEventListener("click",
    function(){
        // controlla se nella lista
        for (let i = 0; i < listaMail.length; i++) {
            let checkMail = listaMail[i];
            
        // dai esito
            if (checkMail === mioInput.value){
                mail = true;
            }
            else  {
             }
        }

        if (mail == true){
            mioOutput.innerHTML = "la tua mail cè";
        
        } else if (mail !== true){
            mioOutput.innerHTML = "la tua mail non cè";
         }
    }
)









