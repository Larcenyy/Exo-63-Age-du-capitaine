
function test(){
    let check = prompt("Quelle âge avez vous ?");
    console.log(check);

    while(check < 99){
        element.innerText = "Le capitaine a " + check + " ans";
        element.style.color = "red";
        if (check <= 18 ){
            element.innerText = "Le capitaine a " + check + " ans" + ", le capitaine est jeune";
            break;
        }
        else if(check <= 49){
            element.innerText = "Le capitaine a " + check + " ans" + ", le capitaine  n'est pas très vieux";
            break;
        }
        else if(check >= 50){
            element.innerText = "Le capitaine a " + check + " ans" + ", le capitaine est vieux";
            break;
        }
        else alert("impossible de charger");
        break;
    }
}

let element = document.querySelector("p");
// let age = Math.random(50);
console.log(element);

let age = 99;

while(age <= 99){
    element.innerText = "Le capitaine a " + age + " ans";
    element.style.color = "red";
    if (age <= 18 ){
        element.innerText = "Le capitaine a " + age + " ans" + ", le capitaine est jeune";
         break;
    }
    else if(age <= 49){
         element.innerText = "Le capitaine a " + age + " ans" + ", le capitaine  n'est pas très vieux";
         break;
    }
    else if(age >= 50){
         element.innerText = "Le capitaine a " + age + " ans" + ", le capitaine est vieux";
         break;
     }
    else alert("impossible de charger");
    break;
}

