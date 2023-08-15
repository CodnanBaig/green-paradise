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
console.log(app);

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const auth = getAuth();

// Retrieve existing users from localStorage
const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
console.log(storedUsers);
let loggedIn = false;

let isLoggedIn = localStorage.getItem("isLoggedIn");

document.getElementById("googleSignInButton").addEventListener("click", () => {
  // Sign in with Google using a popup
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
      console.error(
        "Google sign-in error:",
        errorCode,
        errorMessage,
        email,
        credential
      );
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  console.log(username, password);
  if (username.length < 6 || password.length < 4) {
    alert(
      "Username should be at least 6 characters long and password should be at least 8 characters long."
    );
    return;
  }

  // Check if the user already exists and the password matches
  const existingUser = storedUsers.find(
    (user) => user.username === username && user.password === password
  );
  if (existingUser) {
    loggedIn = true;
    localStorage.setItem("isLoggedIn", JSON.stringify(loggedIn));
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }

  // Reset the form
  document.getElementById("loginForm").reset();
});

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
