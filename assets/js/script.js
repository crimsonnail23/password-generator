// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//creating a passwordProperties object that should get updated as the user puts in the required info once the writePassword function begins.
//default length is 8, but should get updated once the writePassword function runs.

passwordProperties = {

  length: 8,
  
  lowercase: Boolean,

  uppercase: Boolean,

  numbers:Boolean,

  special: Boolean,

}


//various arrays that need to be pulled from to make password.
var lowercaseLettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

var uppercaseLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharactersArray = []

// Write password to the #password input
function writePassword() {

  //following code to determine how long the password should be.
  var getLengthPrompt = window.prompt("How many characters do you want it to be? it has to be at least 8 and no more than 128 characters");

  //following code to change the data from window prompt from string to number.
  parseInt(getLengthPrompt,10);
  //create minimum and maximum requirement for length of password. 
  if(getLengthPrompt >=8 && getLengthPrompt <=128 ){

    window.alert("You have chosen " + getLengthPrompt);


    //following code should update the length property of passwordProperties to the user input, if the input is in range.
    passwordProperties.length=getLengthPrompt;

    //console log to check if passwordProperties are getting updated.
    console.log("password length is " + passwordProperties.length + " charcters long.");


  } else{

    window.alert("Invalid repsonse, try again");


    //following code resets to beginning of function so the code doesn't keep going with an invalid response.
    writePassword();

  }
// following code to determine if there will be lowercase characters in the password.
  var lowercasePrompt = window.prompt("Do you want lowercase? type 1 for yes, 2 for no")

  if(lowercasePrompt == "1"){

    window.alert("You have chosen lowercase");

    
    passwordProperties.lowercase= true;

    
    console.log("lowercase:" + passwordProperties.lowercase);

} else if(lowercasePrompt == "2") {

    window.alert("You do NOT want lower case");

    passwordProperties.lowercase=false;

    console.log("lowercase:" + passwordProperties.lowercase);

} else {

  window.alert("Invalid response, try again");



  writePassword();

}


  //following code to determine if there will be uppercase characters in the password.
  var uppercasePrompt = window.prompt ("Do you want uppercase? type 1 for yes 2 for no.")

  if(uppercasePrompt == "1"){

  window.alert("You have chosen uppercase");

} else if (uppercasePrompt == "2"){

  window.alert("You do NOT want uppercase");

}
  else{

  window.alert("invalid response, try again");


  //following code resets to beginning of function so the code doesn't keep going with an invalid response.
  writePassword();

}

  //following code to determine if there will be numbers in the password.
  var getNumbersPrompt = window.prompt("Do you want numbers in your password? types 1 for yes, and 2 for no");

  if (getNumbersPrompt == "1"){

  window.alert("You do want numbers");

} else if (getNumbersPrompt == "2") {

  window.alert("You do NOT want numbers")

} else {

  window.alert("Invalid response, try again");

  //following code resets to beginning of function so the code doesn't keep going with an invalid response.
  writePassword();

}

  // following code determines if the password will have special characters ot not
  var specialCharactersPrompt = window.prompt("Do you want special characters? type 1 for yes, and 2 for no");

  if (specialCharactersPrompt == "1") {

  window.alert("You do want special characters");

} else if (specialCharactersPrompt == "2"){

  window.alert("you do NOT want special characters")

} else {

  window.alert("Invalid Response");


  //following code resets to beginning of function so the code doesn't continue with an invalid response.
  writePassword();

}

  //following code makes sure that at least one character type has been selected,
  
  if(lowercasePrompt == "2" && uppercasePrompt == "2" && getNumbersPrompt == "2" && specialCharactersPrompt == "2"){

  window.alert("You need to select at least 1 character type.");

  
  //if at least one character type isn't selected, then it'll reset the function so the code won't continue with a null set for all character types.
  writePassword();

}

for(var i=0; i <= getLengthPrompt; i++ ){



}


  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


