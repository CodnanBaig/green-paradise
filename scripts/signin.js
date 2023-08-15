// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA64H0GreU1NgjWp6Ln7mHMUzwDm0L9pJ4",
  authDomain: "auth-ddd4e.firebaseapp.com",
  projectId: "auth-ddd4e",
  storageBucket: "auth-ddd4e.appspot.com",
  messagingSenderId: "467357216846",
  appId: "1:467357216846:web:25c4642f6726e43c86531f",
};

const app = initializeApp(firebaseConfig);

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const auth = getAuth();

const signupForm = document.getElementById("signupForm");
const signupUsername = document.getElementById("signupUsername");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const googleLoginBtn = document.getElementById("googleSignInButton");

let isLoggedIn = localStorage.getItem("isLoggedIn");

googleLoginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      // Save the user data to local storage, including the display name
      saveUserData({
        username: user.displayName,
        email: user.email,
        isGoogleUser: true,
        displayName: user.displayName,
      });

      // Update the isLoggedIn flag
      isLoggedIn = true;
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));

      // Redirect to the index page
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

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

  window.location.href = "index.html";
}

function saveUserData(userData) {
  // Get existing user data from local storage or create an empty array
  const existingUserData = JSON.parse(localStorage.getItem("userData")) || [];

  if (userData.isGoogleUser) {
    userData.username = userData.displayName; // Update the username to the display name
  }

  console.log(existingUserData);
  // Add the new user data to the array
  existingUserData.push(userData);

  // Update the local storage with the new user data
  localStorage.setItem("userData", JSON.stringify(existingUserData));
}

signupForm.addEventListener("submit", handleSignUp);
