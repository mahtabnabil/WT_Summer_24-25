function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var amount = document.getElementById("amount").value;
  var terms = document.getElementById("terms").checked;
  var pay = document.querySelector('input[name="pay"]:checked');

  if (name === "" || email === "" || phone === "" || password === "" || amount === "") {
    alert("Please fill out all fields.");
    return false;
  }

  var nameCheck = /^[a-zA-Z]+$/;
  if (!nameCheck.test(name)) {
    alert("Name must contain only letters (A-Z or a-z).");
    return false;
  }

  var phoneCheck = /^\d{11}$/;
  if (!phoneCheck.test(phone)) {
    alert("Phone number must be exactly 11 digits.");
    return false;
  }

  var hasUpper = /[A-Z]/.test(password);
  var hasLower = /[a-z]/.test(password);
  var hasNumber = /\d/.test(password);
  var hasSymbol = /[!@#$%^&*]/.test(password);

  if (!hasUpper || !hasLower || !hasNumber || !hasSymbol) {
    alert("Password must include uppercase, lowercase, number, and symbol.");
    return false;
  }

  if (!pay) {
    alert("Please select a payment method.");
    return false;
  }

  if (!terms) {
    alert("You must agree to the terms and conditions.");
    return false;
  }
  alert("Thank you for your donation!");
  return true;
}
