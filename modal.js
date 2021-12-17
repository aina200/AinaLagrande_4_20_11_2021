function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM MODAL
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const note = document.getElementById("note");
const form = document.getElementById("form");
const close_succes_Btn = document.querySelector(".close_succes");

// INPUTS
const inputFirst = document.querySelector('input[name=first]');
const inputLast = document.querySelector('input[name=last]');
const inputEmail = document.querySelector('input[name=email]');
const inputDate = document.querySelector('input[name=birthdate]');
const inputQuant = document.querySelector('input[name=quantity]');
const inputLocation = document.querySelectorAll('input[name=location]');
const inputConditions = document.querySelector('input[name=conditions]');
const inputs = document.querySelectorAll('.text-control');

// RESULTS
let resultFirst = document.getElementById("first-validation");
let resultLast = document.getElementById("last-validation");
let resultEmail = document.getElementById("email-validation"); 
let resultBirth = document.getElementById("date-validation");
let resultQuant = document.getElementById("quant-validation");
let resultLocation = document.getElementById("location-validation");
let resultConditions = document.getElementById("conditions-validation");
let resultDate = document.getElementById("date-validation");

// EMPECHER L'USER DE RENTRER UNE DATE PLUS TARD QU'AJOURDHUI
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("birthdate").setAttribute("max", today);

// REGEX 
let regFirst = /[a-zA-Z]{2,64}/;
let regLast = /[a-zA-Z]{2,64}/;
let regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.forEach((close) => close.addEventListener("click", closeForm));
// close modal-succes event
close_succes_Btn.addEventListener("click", close_succes_modal);

// launch modal form
function launchModal() {
  document.getElementById("form").reset();
// reset the contents of the fields
  modalbg.style.display = "block";

  inputFirst.classList.remove("js-succes-border");
  inputFirst.classList.remove("js-error-border");

  inputLast.classList.remove("js-succes-border");
  inputLast.classList.remove("js-error-border");

  inputEmail.classList.remove("js-succes-border");
  inputEmail.classList.remove("js-error-border");

  inputDate.classList.remove("js-succes-border");
  inputDate.classList.remove("js-error-border");

  inputQuant.classList.remove("js-succes-border");
  inputQuant.classList.remove("js-error-border");

  document.querySelectorAll('.result').forEach(item => {
    item.style.display = "none";
  });
}
// launch modal btn
function closeForm() {
  modalbg.style.display = "none";
}
// launch modal-succes btn
function close_succes_modal() {
  note.style.display = "none";
}
// ESCAPE CLOSE 
window.addEventListener('keydown', function(e){
  if(e.key === 'Escape' || e.key === 'Esc'){
    closeForm()
    close_succes_modal()
  }
})

// CONDITIONS 
inputFirst.addEventListener('input', function(e) {
    let value = e.target.value;
    if (value.match(regFirst)) {
      inputFirst.classList.add("js-succes-border");
      resultFirst.style.display = "none";
    } 
    else {
      resultFirst.style.display = "inline-block";
      inputFirst.classList.remove("js-succes-border");
      inputFirst.classList.add("js-error-border");
      
      resultFirst.innerHTML = "Veuillez entrer 2 caractères minimun.";
    }
});

inputLast.addEventListener('input', function(e) {
  
    let value = e.target.value;
    if (value.match(regLast)) {
      inputLast.classList.add("js-succes-border");
      resultLast.style.display = "none";
    } else {
      resultLast.style.display = "inline-block";
      inputLast.classList.remove("js-succes-border");
      inputLast.classList.add("js-error-border");
      resultLast.innerHTML = "Veuillez entrer 2 caractères minimun.";
    }
});


inputEmail.addEventListener('input', function(e) {
   
    let value = e.target.value;
    // if email matches with expected regex values
    if (value.match(regEmail)) {
      inputEmail.classList.add("js-succes-border");
      resultEmail.style.display = "none";
    } else {
      resultEmail.style.display = "inline-block";
      inputEmail.classList.remove("js-succes-border");
      inputEmail.classList.add("js-error-border");
      resultEmail.innerHTML = "Choisissez une adresse électronique valide.";
    }
});

inputDate.addEventListener('change', function(e) {
  if (inputDate.value.length > 0) {
      inputDate.classList.add("js-succes-border");
      resultBirth.style.display = "none";
     } else {
      resultBirth.style.display = "inline-block";
      inputDate.classList.remove("js-succes-border");
      inputDate.classList.add("js-error-border");
      resultBirth.innerHTML = "Ce champ doit être rempli.";
     }
 });

 inputQuant.addEventListener('change', function(e) {
   // listen to change of state
  if (inputQuant.value.length > 0) {
      inputQuant.classList.add("js-succes-border");
      resultQuant.style.display = "none";
     } else {
      resultQuant.style.display = "inline-block";
      resultQuant.classList.remove("js-succes-border");
      inputQuant.classList.add("js-error-border");
      resultQuant.innerHTML = "Ce champ doit être rempli.";
     }
 });

function countLocations(){
  let theLocation = document.querySelectorAll('input[type=radio]'),i,count = 0;
  for (i = 0; i < theLocation.length; i++){
    if (theLocation[i].checked){
      count++;
    } 
  }
  return count;
};
// REMOVE ERROR FUNCTION FOR RADIO INPUTS 
for (var i = 0; i < inputLocation.length; i++) {
  inputLocation[i].addEventListener('click', removeError); 
}
function removeError(e)
{
  resultLocation.style.display = "none";
};

// ACCEPT INPUT CONDITIONS 
inputConditions.addEventListener('change', e => {
  if(e.target.checked){
    resultConditions.style.display = "none";
  }
  else{
    resultConditions.style.display = "inline-block";
  }
});

// ONSUBMITT FUCNTION
form.addEventListener("submit", e => {
  e.preventDefault();
  functionValidation();
});

function showNotification() {

  note.style.display = "block";
  close_succes_Btn.style.display = "block";
}

 function functionValidation() {

  let inputCount = 0;
  //counter initialization

  if (inputFirst.value.length== 0) {
    resultFirst.style.display = "inline-block";
    resultFirst.innerHTML = "Ce champ doit être rempli.";
    inputFirst.classList.add("js-error-border");
    inputCount++;
  } 
  else{
    resultFirst.style.display = "none";
    inputFirst.classList.add("js-succes-border");
  }

  if (inputLast.value.length == 0) {
    resultLast.style.display = "inline-block";
    resultLast.innerHTML = "Ce champ doit être rempli.";
    inputLast.classList.add("js-error-border");
    inputCount++;
  } 
  
  if (inputEmail.value.length == 0) {
    resultEmail.style.display = "inline-block";
    resultEmail.innerHTML = "Le champ email doit être rempli.";
    inputEmail.classList.add("js-error-border");
    inputCount++;
  } 

  if (inputDate.value.length == 0) {
    resultDate.style.display = "inline-block";
    resultDate.innerHTML = "Le champ de date doit être rempli.";
    inputDate.classList.add("js-error-border");
    inputCount++;
  } 

  if (inputQuant.value.length == 0) {
    resultQuant.style.display = "inline-block";
    resultQuant.innerHTML = "Le champ de tournois doit être rempli.";
    inputQuant.classList.add("js-error-border");
    inputCount++;
  } 

  if (countLocations() == 0) {
    resultLocation.style.display = "inline-block";
    resultLocation.innerHTML = "Le champ d'option doit être rempli.";
    inputCount++;
  } 

  //If the conditions are not checked
  if (!inputConditions.checked) {
    resultConditions.style.display = "inline-block";
    resultConditions.innerHTML = "Veuillez accepter les conditions.";
    inputCount++;
  }  

  // If there is no error
  else if (inputCount === 0) {
    modalbg.style.display = "none";
    showNotification();
    document.getElementById("form").reset();
  } 
};