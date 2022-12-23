// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(rndInt);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// lowercase characters
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
// converts lowercase letters to uppercase
var uppercaseLetters = lowercaseLetters.toUpperCase();

// string for all numbers
var allNumbers = '0123456789';

// string for adding special characters
var specialCharacters = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';

var possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters, allNumbers);

// develop function for choosing random password
function generatePassword(length) {
  var result = ' ';
  var charactersLength = possibleCharacters.length;
  for (let i = 0; i < length; i++) {
    result += possibleCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// Random number between 8 and 128
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var rndInt = randomIntFromInterval(8, 128)

console.log(rndInt)
console.log(generatePassword(rndInt))

