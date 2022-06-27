// Assignment code here


//function to determine length of password.
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


//function to see if password will have lowercase or not.
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


//funtion to see if password will have uppercase
var getUppercase = function(){
  
  var uppercasePrompt = window.prompt ("Do you want uppercase? type 1 for yes 2 for no.")

    if(uppercasePrompt == "1"){

      window.alert("You have chosen uppercase");

} else if (uppercasePrompt == "2"){

      window.alert("You do NOT want uppercase");

}
  else{

      window.alert("invalid response");

      getUppercase();

  }


};

//function to see if password will have numbers
var getNumbers = function (){

  var getNumbersPrompt = window.prompt("Do you want numbers in your password? types 1 for yes, and 2 for no");

  if (getNumbersPrompt == "1"){

    window.alert("You do want numbers");

} else if (getNumbersPrompt == "2") {

    window.alert("You do NOT want numbers")

} else {

    window.alert("Invalid response");

    getNumbers();

}

};


//function to see if password will have special characters.
var getSpecialCharacters = function(){

  var specialCharactersPrompt = window.prompt("Do you want special characters? type 1 for yes, and 2 for no");

  if (specialCharactersPrompt == "1") {

    window.alert("You do want special characters");

} else if (specialCharactersPrompt == "2"){

    window.alert("you do not want special characters")

} else {

  window.alert("Invalid Response");

  getSpecialCharacters();

}

}


//function to make sure at least one character was selected from the previous functions.
var characterCheck = function(){

  if(lowercasePrompt == "2" && uppercasePrompt == "2" && getNumbersprompt == "2" && specialCharactersPrompt == "2"){

    window.prompt("You need to select at least 1 character type.");

    getLowercase();

  }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  getLength();
  getLowercase();
  getUppercase();
  getNumbers();
  getSpecialCharacters();
  characterCheck();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
