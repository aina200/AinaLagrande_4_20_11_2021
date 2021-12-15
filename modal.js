function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM MODAL
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

const form = document.getElementById("form");

// INPUTS
const inputFirst = document.querySelector('input[name=first]');
const inputLast = document.querySelector('input[name=last]');
const inputEmail = document.querySelector('input[name=email]');
const inputDate = document.querySelector('input[name=birthdate]');
const inputQuant = document.querySelector('input[name=quantity]');
const inputLocation = document.querySelector('input[name=location]');
const inputConditions = document.querySelector('input[name=conditions]');

// RESULTS
let resultFirst = document.getElementById("first-validation");
let resultLast = document.getElementById("last-validation");
let resultEmail = document.getElementById("email-validation"); 
let resultBirth = document.getElementById("date-validation");
let resultQuant = document.getElementById("quant-validation");
let resultLocation = document.getElementById("location-validation");
let resultConditions = document.getElementById("conditions-validation");
let resultDate = document.getElementById("date-validation");
let resultGeneral = document.getElementById("general-validation");


// REGEX 
let regFirst = /[a-zA-Z]{2,64}/;
let regLast = /[a-zA-Z]{2,64}/;
let regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


// count++
const resultClass = document.querySelector(".result");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.forEach((close) => close.addEventListener("click", closeForm));

// launch modal form
function launchModal() {
  document.getElementById("form").reset();
  // purger contenu des champs
  modalbg.style.display = "block";

  document.querySelectorAll('.result').forEach(item => {
    item.style.display = "none";
    // purger contenu des alertes
  });
}

function closeForm() {
  modalbg.style.display = "none";
}

// function displayNone(e) {
//   // passer les id 
//   e.style.display = "none";
// }

inputFirst.addEventListener('input', function(e) {
    let value = e.target.value;
    if (value.match(regFirst)) {
      inputFirst.classList.add("js-succes-border");
      resultFirst.style.display = "none";
    } 
    else {
      resultFirst.style.display = "inline-block";
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
      inputLast.classList.add("js-error-border");
      resultLast.innerHTML = "Veuillez entrer 2 caractères minimun.";
    }
});


inputEmail.addEventListener('input', function(e) {
   
    let value = e.target.value;
    // si email match avec les valeurs de regex attendue 
    if (value.match(regEmail)) {
      inputEmail.classList.add("js-succes-border");
      resultEmail.style.display = "none";
    } else {
      resultEmail.style.display = "inline-block";
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
      inputDate.classList.add("js-error-border");
      resultBirth.innerHTML = "Ce champ doit être rempli.";
     }
 });

 inputQuant.addEventListener('change', function(e) {
   // écouter changement d'état
  if (inputQuant.value.length > 0) {
      inputQuant.classList.add("js-succes-border");
      resultQuant.style.display = "none";
     } else {
      resultQuant.style.display = "inline-block";
      inputQuant.classList.add("js-error-border");
      resultQuant.innerHTML = "Ce champ doit être rempli.";
     }
 });

function countLocations(){
  let theLocation = document.getElementsByClassName("location"),
    i,
    count = 0;
  for (i = 0; i < theLocation.length; i++){
   
    if (theLocation[i].checked){
      count++;
    } 
  }
  return count;
};


// let inputsLocation = document.getElementsByName("location");

// let theLocation = document.getElementsByClassName("location")
// for (i = 0; i < theLocation.length; i++){
//   inputsLocation.addEventListener('click', function() {
//     console.log(inputsLocation)
//   });
// }

// console.log(inputsLocation)





document.getElementById("checkbox1").attributes["required"] = "";

inputConditions.addEventListener('change', e => {
  if(e.target.checked){
    displayNone(resultConditions);
  }
});

// ONSUBMITT FUCNTION
form.addEventListener("submit", e => {
  e.preventDefault();
  functionValidation();
});

function showNotification(){
  
  document.getElementById("note").style.display = "block";
  setTimeout(function(){
    document.getElementById("note").style.display = "none";
  }, 3000);
}

 function functionValidation() {

  let inputCount = 0;
  // initialisation du compteur

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
    // fonction appelante count 
    resultLocation.style.display = "inline-block";
    resultLocation.innerHTML = "Le champ d'option doit être rempli.";
    inputCount++;
  } 
  


  // Si les conditions ne sont pas checked 
  if (!inputConditions.checked) {
    resultConditions.style.display = "inline-block";
    resultConditions.innerHTML = "Veuillez accepter les conditions.";
    inputCount++;
  }  

  // S'il n'ya pas d'erreur 
  else if (inputCount === 0) {
    modalbg.style.display = "none";
    showNotification();
    document.getElementById("form").reset();
  } 
};