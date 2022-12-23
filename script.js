// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Determine length of password between 12-16
var passRange = [12, 13, 14, 15, 16];

var randomLength = Math.floor(Math.random() * passRange.length);

var passwordLength = passRange[randomLength]

var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
// converts lowercase letters to uppercase
var uppercaseLetters = lowercaseLetters.toUpperCase();

// string for adding special characters
var specialCharacters = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';

var possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters);

// develop function for choosing random password
function generatePassword(length) {
  var result = ' ';
  var charactersLength = possibleCharacters.length;
  for (let i = 0; i < length; i++) {
    result += possibleCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}



