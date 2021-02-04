// Assignment Code
var generateBtn = document.querySelector("#generate");
function getpasswordcriteria() {
  let passwordlength= parseInt(prompt("Enter length for password"));

  if (isNaN(passwordlength) === true) {
    alert ("Length must be a number");
    return;
  }
  // Check if password length is within limits
  if (passwordlength < 8) {
    alert ("Password must be at least 8 characters");
  return;
  }
  if (passwordlength > 128) {
    alert ("Password must be less than 129 characters");
  return;
  }

  // Create variable to store boolean including special characters
  let includeSpc = confirm ("Click ok to confirm to include special characters. Otherwise click cancel");

  // Create variable to store boolean including lowercase
  let includeLwr = confirm ("Click ok to confirm to include lowercase characters. Otherwise click cancel");
  
  // Create variable to store boolean including Uppercase characters
  let includeUpr = confirm ("Click ok to confirm to include Uppercase characters. Otherwise click cancel");
  
  // Create variable to store boolean including Numerical characters
  let includeNmbr = confirm ("Click ok to confirm to include numerical characters. Otherwise click cancel");

  // Check to see if at least one charccter type is selected
  if (
    includeSpc === false &&
    includeLwr === false &&
    includeUpr === false &&
    includeNmbr === false) {
      alert ("Include at least one character type has to be selected");
    return
    }
}
function generatePassword() {
  let pswinput=getpasswordcriteria();
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

