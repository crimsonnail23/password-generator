// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var getLength = function(){
  
  var getLengthPrompt = window.prompt("How many characters do you want it to be? it has to be at least 8 and no more than 128 characters");

  parseInt(getLengthPrompt,10);
  
  if(getLengthPrompt >=8 && getLengthPrompt <=128 ){

    window.alert("You have chosen " + getLengthPrompt);

  } else{

    window.alert("Invalid repsonse");

    getLength();

  }


}

var getLowercase = function(){

  var lowercasePrompt = window.prompt("Do you want lowercase? type 1 for yes, 2 for no")

    if(lowercasePrompt == "1"){

      window.alert("You have chosen lowercase");

} else if(lowercasePrompt == "2") {

      window.alert("You do NOT want lower case");

} else {

    window.alert("Invalid response");

    getLowercase();

}


}

var getUppercase = function(){}


// Write password to the #password input
function writePassword() {

  getLength();
  getLowercase();
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
