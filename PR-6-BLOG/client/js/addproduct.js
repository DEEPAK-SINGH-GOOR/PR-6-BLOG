import productApi from "../../api/product.api.js";

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Get values from the form
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let img = document.getElementById("img");
  
  // Create FormData object and append values
  let formdata = new FormData();
  formdata.append("title", title);
  formdata.append("price", price);
  formdata.append("description", description);
  formdata.append("img", img.files[0]);
  
  // Send data to the API
  productApi.post(formdata);
};

// Add event listener to the form
document.getElementById("form").addEventListener("submit", handleSubmit);
