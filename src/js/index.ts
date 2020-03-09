
let TextInput: HTMLInputElement = <HTMLInputElement> document.getElementById("textInput");

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

let Oparation: HTMLSelectElement = <HTMLSelectElement> document.getElementById("ActionSelection");

let buttonAction: HTMLButtonElement = <HTMLButtonElement> document.getElementById("DoAction");
buttonAction.addEventListener("click", Action);


function Action(): void 
{

   
    switch(Oparation.value) {


        case "UpperCase": 
        {
            console.log("Update 7")
            console.log("LowerCase")
            element.innerHTML = TextInput.value.toString().toUpperCase();
            break;
        }
        case "LowerCase": 
        {
            console.log("Update 7")
            console.log("LowerCase")
            element.innerHTML = TextInput.value.toString().toLowerCase();
            break;
        }
    }

}






