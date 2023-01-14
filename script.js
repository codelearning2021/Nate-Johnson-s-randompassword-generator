// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperCaseAsk;
var numbersAsk;
var specCharAsk;
var passwordLengthAsk;
var possibleCharacters;
var charactersLength;

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

// develop function for choosing random characters in array
function generatePassword(length) {
  var result = ' ';
  var charactersLength = runPossibleCharacters();
  for (let i = 0; i < length; i++) {
    result += runPossibleCharacters.charAt(Math.floor(Math.random() * charactersLength));

  }
  console.log(runPossibleCharacters)
  return result;
}

// Selections which arrays to pull from based on user inputs
function runPossibleCharacters(possibleCharacters) {
  if (upperCaseAsk === true && numbersAsk === true && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters, allNumbers);
  }
  else if (upperCaseAsk === true && numbersAsk === true && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters, allNumbers);
  }
  else if (upperCaseAsk === true && numbersAsk === false && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters);
  }
  else if (upperCaseAsk === false && numbersAsk === false && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters;
  }
  else if (upperCaseAsk === false && numbersAsk === false && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(specialCharacters);
  }
  if (upperCaseAsk === false && numbersAsk === true && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(allNumbers, specialCharacters);
  }
  else if (upperCaseAsk === false && numbersAsk === true && specCharAsk === false) {
    return possibleCharacters = lowercaseLetters.concat(allNumbers);
  }
  else if (upperCaseAsk === true && numbersAsk === false && specCharAsk === true) {
    return possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters);
  }
}