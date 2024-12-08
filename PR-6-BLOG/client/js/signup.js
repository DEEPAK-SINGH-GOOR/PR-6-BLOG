import userApi from "../../api/user.api.js";
import getValue from "../../components/input.js";
import navbar from "../../components/navbar.js";

// Set up the navbar
document.getElementById("navbar").innerHTML = navbar();

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();

  // Create the user object from form input values
  let user = {
    username: getValue("#username"),
    email: getValue("#email"),
    number: getValue("#number"),
    password: getValue("#password"),
    role: "ADMIN",
    isActive: false,
  };

  // Check if all required fields are filled
  if (!user.username || !user.email || !user.password || !user.number) {
    alert("Please enter all required fields");
    return;
  }

  // Call the signup API method
  userApi.signup(user);
};

// Add event listener to the form
document.getElementById("userDetails").addEventListener("submit", handleSubmit);
