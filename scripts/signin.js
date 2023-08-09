const signupForm = document.getElementById("signupForm");
const signupUsername = document.getElementById("signupUsername");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");

function handleSignUp(event) {
  event.preventDefault();

  if (!signupUsername.value || !signupEmail.value || !signupPassword.value) {
    alert("Please fill in all fields.");
    return;
  }

  const formData = {
    username: signupUsername.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };

  // Save user data to local storage
  saveUserData(formData);

  // Clear the form fields
  signupUsername.value = "";
  signupEmail.value = "";
  signupPassword.value = "";

  alert("Sign-up successful. You can now log in.");
}

function saveUserData(userData) {
  // Get existing user data from local storage or create an empty array
  const existingUserData = JSON.parse(localStorage.getItem("userData")) || [];

  // Add the new user data to the array
  existingUserData.push(userData);

  // Update the local storage with the new user data
  localStorage.setItem("userData", JSON.stringify(existingUserData));
}

signupForm.addEventListener("submit", handleSignUp);
