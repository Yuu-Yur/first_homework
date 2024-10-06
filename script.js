document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password123") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password");
  }
});

document.getElementById("forgot-password-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Password recovery instructions will be sent to your email.");
});

document.getElementById("signup-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Sign up successful!");
});
