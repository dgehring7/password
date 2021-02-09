// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericalChar = "0123456789";
let specialChar = "@%+\/!#$^*?:)(}][~-_.<>";
let password = "";
let character = "";
let passChars = "";

function getpasswordcriteria() {
  let passwordlength= parseInt(prompt("Enter length for password"));
  passChars = "";
  password = "";

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
  let includeSpc = confirm ("Click ok to confirm to include special characters.");
  if (includeSpc){
    passChars = passChars+specialChar;
  }
  // Create variable to store boolean including lowercase
  let includeLwr = confirm ("Click ok to confirm to include lowercase characters.");
  if (includeLwr){
    passChars = passChars+lowercaseChars;
  }
  // Create variable to store boolean including Uppercase characters
  let includeUpr = confirm ("Click ok to confirm to include Uppercase characters.");
  if (includeUpr){
    passChars = passChars+uppercaseChars;
  }
  // Create variable to store boolean including Numerical characters
  let includeNmbr = confirm ("Click ok to confirm to include numerical characters.");
  if (includeNmbr){
    passChars = passChars+numericalChar;
  }
  console.log(passChars);
  // Check to see if at least one charccter type is selected
  if (
    includeSpc === false &&
    includeLwr === false &&
    includeUpr === false &&
    includeNmbr === false) {
      alert ("Include at least one character type has to be selected");
    return
    }
    
    // Creat object to store user inputs
    passwordInputs = {
      passLength : passwordlength,
      includeSpc : includeSpc,
      includeLwr :  includeLwr,
      includeUpr : includeUpr,
      includeNmbr : includeNmbr
    }
return passwordInputs;
}
function generatePassword() {
  let pswinput=getpasswordcriteria();
  for (var i = 0; i < pswinput.passLength; i++){
      password = password+passChars.charAt(Math.floor(Math.random()*passChars.length));
  }
return password;
}
// Write password to the #password input
function writePassword() {
  let userPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword
getpasswordcriteria
