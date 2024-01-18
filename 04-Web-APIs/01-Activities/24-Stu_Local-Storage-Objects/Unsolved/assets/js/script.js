var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
	event.preventDefault();

	// TODO: Create user object from submission
	// collect the 4 inputs
	// you could do this more efficiently
  // I did it in two steps  but you could do it in one step
  // .textContent did not work for me I had to use Value
	var fname = firstNameInput.value;
	var lname = lastNameInput.value;
	var email = emailInput.value;
	var pass = passwordInput.value;
	// create an object
	var newUser = {
		firstName: fname,
		lastName: lname,
		email: email,
		password: pass,
	};

	// TODO: Set new submission to local storage
	localStorage.setItem('newUser', JSON.stringify(newUser));
});
