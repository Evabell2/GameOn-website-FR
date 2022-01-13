function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//#region TODO : fermer la modale
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  location.reload();
}
//#endregion TODO : fermer la modale

document.getElementById("envoyer").addEventListener('click', (event) => {

  event.preventDefault();
// todo enlever true  ||
  if (true  || validateForm())  {
    document.getElementById("modalBody").innerHTML = `<p class="return_message">Merci, votre réservation a été reçue avec succès !</p> `; 
  }
})

function validateForm() {
  let isValidForm = true
  // PRENOM
  const prenom = document.getElementById("first");
  const prenom_m = document.getElementById("prenom_erreur");

  if (prenom.value === '' || prenom.value.length < 2) {
    prenom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValidForm = false;
  }
  else {
    prenom_m.textContent = "";
  }

  // NOM
  const nom = document.getElementById("last");
  const nom_m = document.getElementById("nom_erreur");

  if (nom.value === '' || nom.value.length < 2) {
    nom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValidForm = false;
  }
  else {
    nom_m.textContent = "";
  }

  // MAIL
  const email = document.getElementById("email");
  const email_m = document.getElementById("email_erreur");
  var mailCaractere = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;

  if (mailCaractere.test(email.value)) {
    email_m.textContent = "";
  }
  else {
    email_m.textContent = " Veuillez entrer un email correct";
    isValidForm = false;
  }

  // NAISSANCE
  const naissance = document.getElementById("birthdate");
  const naissance_m = document.getElementById("birthdate_erreur");

  if (naissance.value === '') {
    naissance_m.textContent = "Veuillez entrez votre date de naissance";
    isValidForm = false;
  }
  else {
    naissance_m.textContent = "";
  }

  // NOMBRE DE TOURNOIS
  const nombreTournois = document.getElementById("quantity");
  const nombreTournois_m = document.getElementById("quantity_erreur");

  if (nombreTournois.value === '') {
    nombreTournois_m.textContent = "Veuillez entrer le nombre de tournois participé";
    isValidForm = false;
  }
  else {
    nombreTournois_m.textContent = "";
  }

  // SELECTION VILLE
  const location1 = document.getElementById("location1");
  const location2 = document.getElementById("location2");
  const location3 = document.getElementById("location3");
  const location4 = document.getElementById("location4");
  const location5 = document.getElementById("location5");
  const location6 = document.getElementById("location6");
  const location_m = document.getElementById("location_manquant");

  if ((location1.checked) || (location2.checked) || (location3.checked) || (location4.checked) || (location5.checked) || (location6.checked)) {
    location_m.textContent = "";
  }
  else {
    location_m.textContent = "Vous devez choisir une option";
    isValidForm = false;
  }

  // CONDITIONS A COCHER
  const checkbox1 = document.getElementById("checkbox1");
  const condition_m = document.getElementById("condition_erreur");

  if (checkbox1.checked) {
    condition_m.textContent = "";
  }
  else {
    condition_m.textContent = "Vous devez vérifier que vous acceptez les termes et conditions";
    isValidForm = false;
  }

  return isValidForm

}