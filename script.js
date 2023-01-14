// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userSelections();
  var password = generatePassword(passwordLengthAsk);
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

var upperCaseAsk;
var numbersAsk;
var specCharAsk;
var passwordLengthAsk;
var possibleCharacters;
var charactersLength;


// prompts that ask the user fo their selections
function userSelections() {
  var upperCaseAsk = confirm("Do you want to use uppercase letters?");
  var numbersAsk = confirm("Do you want to use numbers?");
  var specCharAsk = confirm("Do you want to use special characters?");
  var passwordLengthAsk = prompt("Pick a number between 8 and 128 for your password length");
  // validate number selection from user
  if (isNaN(passwordLengthAsk)
    || passwordLengthAsk < 8
    || passwordLengthAsk > 128) {
    alert("Invalid input");
  }
  else {
    console.log(upperCaseAsk, numbersAsk, specCharAsk, passwordLengthAsk);
  }
}

// Selections which arrays to pull from based on user inputs
function runPossibleCharacters(possibleCharacters) {
  if (upperCaseAsk === true && numbersAsk === true && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters, allNumbers);
  }
  if (upperCaseAsk === true && numbersAsk === true && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters, allNumbers);
  }
  if (upperCaseAsk === true && numbersAsk === false && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters);
  }
  if (upperCaseAsk === false && numbersAsk === false && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters;
  }
  if (upperCaseAsk === false && numbersAsk === false && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(specialCharacters);
  }
  if (upperCaseAsk === false && numbersAsk === true && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(allNumbers, specialCharacters);
  }
  if (upperCaseAsk === false && numbersAsk === true && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters.concat(allNumbers);
  }
  if (upperCaseAsk === true && numbersAsk === false && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters);
  }
}

// develop function for choosing random characters in array
function generatePassword(length) {
  var result = ' ';
  var charactersLength = runPossibleCharacters();
  for (let i = 0; i < length; i++) {
    result += runPossibleCharacters.charAt(Math.floor(Math.random() * charactersLength));

  }
  console.log(charactersLength)
  return result;
}
