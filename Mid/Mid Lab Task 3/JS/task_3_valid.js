function validateForm() {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var otherAmount = document.getElementById("other_amount").value;
  var bkash = document.getElementById("bkash");
  var rocket = document.getElementById("rocket");
  var card = document.getElementById("card");
  var terms = document.getElementById("terms").checked;
  var amount_none = document.getElementById("amount_none");
  var amount_500 = document.getElementById("amount_500");
  var amount_1000 = document.getElementById("amount_1000");
  var amount_2000 = document.getElementById("amount_2000");
  var amount_3000 = document.getElementById("amount_3000");
  var amount_other = document.getElementById("amount_other");

  var selectedAmount = null;
  if (amount_none.checked) selectedAmount = "None";
  else if (amount_500.checked) selectedAmount = "500";
  else if (amount_1000.checked) selectedAmount = "1000";
  else if (amount_2000.checked) selectedAmount = "2000";
  else if (amount_3000.checked) selectedAmount = "3000";
  else if (amount_other.checked) selectedAmount = "Other";

  if (
    firstName === "" || lastName === "" || email === "" || phone === "" ||
    password === "" || confirmPassword === ""
  ) {
    alert("Please fill out all required fields.");
    return false;
  }
  var nameCheck = /^[a-zA-Z]+$/;
  if (!nameCheck.test(firstName) || !nameCheck.test(lastName)) {
    alert("Name must contain only letters.");
    return false;
  }


  if (!/^\d{11}$/.test(phone)) {
    alert("Phone number must be exactly 11 digits.");
    return false;
  }

 
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

var strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

if (!strongPassword.test(password)) {
  alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
  return false;
}

  if (!selectedAmount) {
    alert("Please select a donation amount.");
    return false;
  }

  if (selectedAmount === "Other" && otherAmount === "") {
    alert("Please enter a custom amount.");
    return false;
  }

  if (!bkash.checked && !rocket.checked && !card.checked) {
    alert("Please select a payment method.");
    return false;
  }

  if (!terms) {
    alert("You must agree to donate on a regular basis.");
    return false;
  }

  alert("Thank you for your donation!");
  return true;
}
