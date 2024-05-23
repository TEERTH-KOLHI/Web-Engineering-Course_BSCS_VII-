// auth.js

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Predefined credentials for demonstration
    var validUsername = "faisal";
    var validPassword = "1234";
    
    // Check if entered credentials match predefined values
    if (username === validUsername && password === validPassword) {
      // Successful login
      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");
      updateUI();
      showSuccessMessage("Login successful!");
    } else {
      // Failed login
      showErrorMessage("Invalid username or password.");
    }
  }
  
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    updateUI();
    showSuccessMessage("Logout successful!");
  }
  
  function updateUI() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("logoutForm").style.display = "block";
    } else {
      document.getElementById("loginForm").style.display = "block";
      document.getElementById("logoutForm").style.display = "none";
    }
  }
  
  function showErrorMessage(message) {
    var errorMsg = document.getElementById("errorMsg");
    errorMsg.innerText = message;
    errorMsg.style.color = "red";
    setTimeout(function() {
      errorMsg.innerText = "";
    }, 3000);
  }
  
  function showSuccessMessage(message) {
    var errorMsg = document.getElementById("errorMsg");
    errorMsg.innerText = message;
    errorMsg.style.color = "green";
    setTimeout(function() {
      errorMsg.innerText = "";
    }, 3000);
  }
  
  window.onload = function() {
    updateUI();
  };
  