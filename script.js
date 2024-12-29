debugger
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
form.addEventListener('submit', (e) => {
    debugger
    e.preventDefault(); // Prevent form submission

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
   

    let isValid = true;

    // Validate username
    if (username.value.trim() === '') {
      usernameError.textContent = 'Username is required.';
      isValid = false;
    } else if (username.value.length < 3 || username.value.length > 15) {
      usernameError.textContent = 'Username must be between 3 and 15 characters.';
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate password
    if (password.value.trim() === '') {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }

    // If all validations pass, display success message
    if (isValid) {
        showPopup()
        debugger
      form.reset(); // Optionally reset the form
    }

  });
  function showPopup() {
    debugger
    popup.classList.add('show');
    overlay.classList.add('show');
  }

 
    
  function closepop(){
    debugger
    popup.classList.remove('show');
    debugger
    overlay.classList.remove('show');
}