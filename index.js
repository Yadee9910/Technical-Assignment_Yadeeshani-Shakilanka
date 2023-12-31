  document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myform");
  const emailInput = document.querySelector('input[name="email"]');
  const emailErrorMessage = document.getElementById("emailError");
  let emailHasFocus = false;

  //Initially hiding the error message
  emailErrorMessage.style.display = "none"; 

  emailInput.addEventListener("input", function() {
        if (!emailHasFocus) return; // Do not show error until the email input has focus
    
        if (!isValidEmail(emailInput.value)) {
          emailInput.classList.add('error');
          emailInput.style.color = "red";
          emailErrorMessage.style.display = "block"; // Show the error message
        } else {
          emailInput.classList.remove('error');
          emailInput.style.color = "";
          emailErrorMessage.style.display = "none"; // Hide the error message
        }
  });


  emailInput.addEventListener("focus", function() {
        emailHasFocus = true;
  });


  emailInput.addEventListener("blur", function() {
        emailHasFocus = false;
        if (!emailInput.value.trim()) {
          emailErrorMessage.style.display = "none"; // Hide the error message if the email input is empty
        }
        emailInput.classList.add(emailInput.value.trim() ? 'valid' : 'error'); // Toggle valid or error class
  });


  form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting by default


    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const address = document.querySelector('input[name="address"]').value;


    if (!firstName || !lastName || !address) {
         alert("Please fill in all the required fields.");

    } else {
      
      if (emailHasFocus && !isValidEmail(emailInput.value)) {
          emailInput.style.color = "red";
          emailErrorMessage.style.display = "block"; // Show the error message

        // Prevent form submission if the email is invalid
        return; 
      }

        // Form is submitted when all fields are filled correctly
        alert("Form submitted successfully!");
        location.reload();// Reload the page itself to clear the data in the from
    }

  });
});


function isValidEmail(email) {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
}