

const mioOutput = document.querySelector("#esito")
const mioBottone = document.querySelector("button")


mioBottone.addEventListener("click",
    function(){
        //genera numero random
        let NumRandom = Math.floor(Math.random()*6) +1;
        console.log(NumRandom);
        document.getElementById("puntipc").innerHTML= "Il PC ha realizzato " + NumRandom + " punti"
        
        let NumRandomUser = Math.floor(Math.random()*6) +1;
        console.log(NumRandomUser);
        document.getElementById("puntiuser").innerHTML= "Tu hai realizzato " + NumRandomUser + " punti"


        if (NumRandomUser>NumRandom){
            mioOutput.innerHTML = "Hai vinto";
        }
        else if (NumRandomUser<NumRandom){
            mioOutput.innerHTML = "Hai perso";
        }
        else if (NumRandomUser=NumRandom){
            mioOutput.innerHTML = "Hai pareggiato... riprova";
        }


    }
)