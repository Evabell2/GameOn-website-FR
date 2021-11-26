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
  }
//#endregion TODO : fermer la modale

//#region Implémenter entrées du formulaire
  const formData = document.querySelectorAll(".formData");
  const form = document.getElementById ("form");

  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");

  const loc1 = document.getElementById ('location1');
  const loc2 = document.getElementById ('location2');
  const loc3 = document.getElementById ('location3');
  const loc4 = document.getElementById ('location4');
  const loc5 = document.getElementById ('location5');
  const loc6 = document.getElementById ('location6');

  const checkbox1 = document.getElementById("checkbox1");
  const checkbox2 = document.getElementById("checkbox2");

  function validate() {
    // Prénom
    if (first.length < 2) {
      displayErrorFeedback(
        firstInput,
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
      );
      return false;
    }
    // Nom
    if (last.length < 2) {
      displayErrorFeedback(
        lastInput,
        "Veuillez entrer votre nom."
      );
      return false;
    }
    // Mail
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      displayErrorFeedback(
        emailInput,
        "Veuillez saisir une adresse email valide."
      );
      return false;
    }
    // Date de naissance
    const dateTime = new Date(birthdate).getTime();
    if (isNaN(dateTime)) {
      displayErrorFeedback(
        birthdateInput,
        "Veuillez entrer votre date de naissance."
      );
      return false;
    }
    // Ville tournois
    if (isNaN(new Number(quantity)) || quantity === "") {
      displayErrorFeedback(
        quantityInput, 
        "Vous devez entrer un nombre."
        );
      return false;
    }
    // Nombre de tournois
    if (location === null) {
      displayErrorFeedback(
        cityOptions,
        "Vous devez choisir une option."
        );
      return false;
    }
    // Case à cocher
    if (!checkboxConditions.checked) {
      displayErrorFeedback(
        checkboxWarning,
        "Vous devez vérifier que vous acceptez les termes et conditions."
      );
      return false;
    }
  
    return true;
  }
  
  form.onsubmit = (event) => {
    const isValid = validate();
    if (isValid === true) {
      console.log("Merci ! Votre réservation a été reçue.")
    }
  }
  document.getElementById("C\'est parti").addEventListener('submit', function() {
    alert("C'est envoyé !")
  })

//#endregion Implémenter entrées du formulaire
