function validateForm() {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var amount = document.querySelector('input[name="amount"]:checked');
  var otherAmount = document.getElementById("other_amount").value;
  var bkash = document.getElementById("bkash");
  var rocket = document.getElementById("rocket");
  var card = document.getElementById("card");
  var terms = document.getElementById("terms").checked;

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
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  if (!amount) {
    alert("Please select a donation amount.");
    return false;
  }

  if (amount.value === "Other" && otherAmount === "") {
    alert("Please enter a custom amount.");
    return false;
  }
  if (!payment) {
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
