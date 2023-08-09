
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 // import { GoogleAuthProvider } from "firebase/auth";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
 // import { getAuth, signInWithRedirect } from "firebase/auth";

//const auth = getAuth();
//signInWithRedirect(auth, provider);

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

const provider = new GoogleAuthProvider();
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA_MzN7dxr7J6YWsF6ehVHB25yeikttABA",
    authDomain: "auto-5156c.firebaseapp.com",
    projectId: "auto-5156c",
    storageBucket: "auto-5156c.appspot.com",
    messagingSenderId: "61579805297",
    appId: "1:61579805297:web:da936c0c054305098911d0",
    measurementId: "G-F07NXS1B99"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


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
