let myButton = document.getElementById("showData");

let inputName = document.getElementById("inputName");
let answerName = document.getElementById("name");

let inputSurname = document.getElementById("inputSurname");
let answerSurname = document.getElementById("surname");

let inputPhone = document.getElementById("inputPhone");
let answerPhone = document.getElementById("phone");

myButton.addEventListener("click", showNewData);

function showNewData() {
    
    answerName.textContent = inputName.value;
    answerSurname.textContent = inputSurname.value;
    answerPhone.textContent = inputPhone.value; 
}