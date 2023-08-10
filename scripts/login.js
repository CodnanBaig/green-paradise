// Retrieve existing users from localStorage
const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
console.log(storedUsers)
let loggedIn = false;
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  console.log(username, password)
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
    localStorage.setItem("isLoggedIn", JSON.stringify(loggedIn))
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }

  // Reset the form
  document.getElementById("loginForm").reset();
});
