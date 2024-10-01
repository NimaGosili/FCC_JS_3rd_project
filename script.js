const input = document.getElementById("user-input");
const checkbtn = document.getElementById("check-btn");
const clearbtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const validNumRegex = /^(1)?\s*(\([0-9]{3}\)|[0-9]{3})\s*(-)*[0-9]{3}\s*(-)*[0-9]{4}$/;
checkbtn.addEventListener("click" , checker);
function checker() {
    if(!input.value){
        alert("Please provide a phone number");
        return;
    }
    results.classList.remove("hidden");
    console.log(validNumRegex.test(input.value));
    if(validNumRegex.test(input.value)){
        results.innerText = `Valid US number: ${input.value}`;
        return;
    }else{
        results.innerText = `Invalid US number: ${input.value}`;
        return;
    } 
}
clearbtn.addEventListener("click" , clear);
function clear() {
    console.log("clear");
    input.value = "";
    results.classList.add("hidden");
    results.innerText = "";
}


