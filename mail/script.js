//lista mail di partenza

const listaMail = ["giulio@gmail.com", "gufetta84@mail.it", "dobby87@gmail.com", "bianchi@mail.com", "spiderman@yahoo.it", "pawpatrol92@mail.com", "rossi@gmail.com" ];

const mioOutput = document.querySelector("#esito")
const mioInput = document.querySelector("input")
const mioBottone = document.querySelector("button")


// chiedere mail
mioBottone.addEventListener("click",
    function(){
        // controlla se nella lista
        for (let i = 0; i < listaMail.length; i++) {
            let checkMail = listaMail[i];
        // dai esito
            if (checkMail === mioInput.value){
                console.log("ok");
                mioOutput.innerHTML = "la tua mail cè";

                {break;}
            }
            else  {
                console.log("non cè");
                mioOutput.innerHTML = "la tua mail non cè";
             }
        }
    }
)








