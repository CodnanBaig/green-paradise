// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
  })
  .catch((error) => {
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
// signInWithPopup(auth,provider)

 console.log( signInWithPopup(auth,provider))
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
  measurementId: "G-F07NXS1B99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Perform login validation
  if (username.length < 6 || password.length < 8) {
    alert(
      "Username should be at least 6 characters long and password should be at least 8 characters long."
    );
    return;
  }

  // Retrieve existing users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the user already exists and the password matches
  const existingUser = storedUsers.find(
    (user) => user.username === username && user.password === password
  );
  if (existingUser) {
    // Redirect to the home page or perform any other action
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }

  // Reset the form
  document.getElementById("loginForm").reset();
});
