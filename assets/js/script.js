// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var getPasswordLength = function(){
  
  window.prompt("How many characters do you want it to be? it has to be at least 8 and no more than 128 characters");


}


// Write password to the #password input
function writePassword() {

  getPasswordLength();
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
