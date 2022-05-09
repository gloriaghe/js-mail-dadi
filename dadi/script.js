

const numberUser = document.querySelector("input")
const mioOutput = document.querySelector("#esito")
const mioBottone = document.querySelector("button")


mioBottone.addEventListener("click",
    function(){
        //genera numero random
        let NumRandom = Math.floor(Math.random()*6) +1;
        console.log(NumRandom);

        if (numberUser.value>NumRandom){
            mioOutput.innerHTML = "Hai vinto";
        }
        else if (numberUser.value<NumRandom){
            mioOutput.innerHTML = "Hai perso";
        }
        else if (numberUser.value=NumRandom){
            mioOutput.innerHTML = "Hai pareggiato... riprova";
        }


    }
)