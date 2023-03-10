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
  var passwordLengthAsk = userSelections();
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
  upperCaseAsk = confirm("Do you want to use uppercase letters?");
  numbersAsk = confirm("Do you want to use numbers?");
  specCharAsk = confirm("Do you want to use special characters?");
  passwordLengthAsk = prompt("Pick a number between 8 and 128 for your password length");
  // validate number selection from user
  if (isNaN(passwordLengthAsk)
    || passwordLengthAsk < 8
    || passwordLengthAsk > 128) {
    alert("Invalid input");
  }
  else {
    console.log(upperCaseAsk, numbersAsk, specCharAsk, passwordLengthAsk);
    return passwordLengthAsk;
  }
}

// develop function for choosing random characters in array
function generatePassword(length) {
  var result = ' ';
  var charactersLength = runPossibleCharacters();
  for (let i = 0; i < length; i++) {
    var characters = runPossibleCharacters();
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(charactersLength)
  return result;
}

// Selections which arrays to pull from based on user inputs
function runPossibleCharacters() {
  var possibleCharacters = ""
  if (upperCaseAsk === true && numbersAsk === true && specCharAsk === true) {
    possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters, allNumbers);
  } else if (upperCaseAsk === true && numbersAsk === true && specCharAsk === false) {
    possibleCharacters = lowercaseLetters.concat(uppercaseLetters, allNumbers);
  } else if (upperCaseAsk === true && numbersAsk === false && specCharAsk === false) {
    possibleCharacters = lowercaseLetters.concat(uppercaseLetters);
  } else if (upperCaseAsk === false && numbersAsk === false && specCharAsk === false) {
    possibleCharacters = lowercaseLetters;
  } else if (upperCaseAsk === false && numbersAsk === false && specCharAsk === true) {
    possibleCharacters = lowercaseLetters.concat(specialCharacters);
  } else if (upperCaseAsk === false && numbersAsk === true && specCharAsk === true) {
    possibleCharacters = lowercaseLetters.concat(allNumbers, specialCharacters);
  } else if (upperCaseAsk === false && numbersAsk === true && specCharAsk === false) {
    possibleCharacters = lowercaseLetters.concat(allNumbers);
  } else if (upperCaseAsk === true && numbersAsk === false && specCharAsk === true) {
    possibleCharacters = lowercaseLetters.concat(uppercaseLetters, specialCharacters);
  }
  console.log(possibleCharacters);
  return possibleCharacters;
}

