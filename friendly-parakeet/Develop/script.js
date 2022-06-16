// Assignment code here


// Get references to the #generate element
// Makes random value by lenght given

var randomNumber = function (max,min) {
  var value = Math.floor(Math.random() * (max - min));
  return value;
};

function writePassword(promptLenght) {
  var newCharacters = "";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[]'^_{}|~`";
  var numberString = "0123456789";
  window.alert(
    "Answer the following questions to create your Unique Password."
  );

  var promptLenght = parseInt(
    window.prompt(
      "How many characters would you like your password to be? Pick a number between 8 and 128."
    )
  );

  if (promptLenght < 8 || promptLenght > 128 || promptLeght == NaN) {
    window.alert("You need to provide")
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
