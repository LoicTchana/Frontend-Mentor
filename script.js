document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire si des erreurs sont présentes
  
    // Variable pour savoir si le formulaire est valide
    let formValid = true;
  
    // Fonction pour gérer l'erreur de chaque champ
    function validateField(input, errorMessageId, customMessage = '') {
      const errorMessage = document.getElementById(errorMessageId);
      if (!input.value) {
        input.classList.add('error');
        errorMessage.textContent = customMessage || 'This field is required';
        errorMessage.style.display = 'block';
        formValid = false;
      } else {
        input.classList.remove('error');
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
      }
    }
  
    // Validation des champs texte
    validateField(document.getElementById('first-name'), 'firstname-error');
    validateField(document.getElementById('lastname'), 'lastname-error');
    
    // Validation de l'email (email valide)
    const emailInput = document.getElementById('email');
    const emailErrorMessage = document.getElementById('email-error');
    if (!emailInput.value) {
      validateField(emailInput, 'email-error'); // Si vide, utilise le message de base
    } else if (!emailInput.value.includes('@')) {
      emailInput.classList.add('error');
      emailErrorMessage.textContent = 'Enter a valid email address'; // Message personnalisé pour email invalide
      emailErrorMessage.style.display = 'block';
      formValid = false;
    } else {
      emailInput.classList.remove('error');
      emailErrorMessage.textContent = '';
      emailErrorMessage.style.display = 'none';
    }
  
    // Validation des autres champs
    validateField(document.getElementById('Message'), 'message-error');
    
    // Validation des boutons radio (Query Type)
    const radioButtons = document.querySelectorAll('input[name="Query"]');
    const queryErrorMessage = document.getElementById('query-error');
    if (![...radioButtons].some(radio => radio.checked)) {
      queryErrorMessage.textContent = 'Please select a query type.';
      queryErrorMessage.style.display = 'block';
      formValid = false;
    } else {
      queryErrorMessage.textContent = '';
      queryErrorMessage.style.display = 'none';
    }
  
    // Validation de la checkbox
    const checkbox = document.getElementById('choix');
    const checkboxErrorMessage = document.getElementById('choix-error');
    if (!checkbox.checked) {
      checkbox.classList.add('error');
      checkboxErrorMessage.textContent = 'To submit this form, please consent to being contacted.';
      checkboxErrorMessage.style.display = 'block';
      formValid = false;
    } else {
      checkbox.classList.remove('error');
      checkboxErrorMessage.textContent = '';
      checkboxErrorMessage.style.display = 'none';
    }
  
    // Si tout est valide, soumettre le formulaire
    if (formValid) {
      alert("Le formulaire est valide !");
      // Uniquement pour la démo : décommentez la ligne suivante pour soumettre le formulaire
      // this.submit(); 
    } else {
      alert("Il y a des erreurs. Veuillez corriger les champs.");
    }
  });
  