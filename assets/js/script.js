// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  //to determine how long the password should be.
  var getLengthPrompt = window.prompt("How many characters do you want it to be? it has to be at least 8 and no more than 128 characters");

  //change the data from window prompt from string to number.
  parseInt(getLengthPrompt,10);
  //create minimum and maximum requirement for length of password. 
  if(getLengthPrompt >=8 && getLengthPrompt <=128 ){

    window.alert("You have chosen " + getLengthPrompt);

  } else{

    window.alert("Invalid repsonse, try again");


    //resets to beginning of function so the code doesn't keep going with an invalid response.
    writePassword();

  }
// to determine if there will be lowercase characters in the password.
  var lowercasePrompt = window.prompt("Do you want lowercase? type 1 for yes, 2 for no")

  if(lowercasePrompt == "1"){

    window.alert("You have chosen lowercase");

} else if(lowercasePrompt == "2") {

    window.alert("You do NOT want lower case");

} else {

  window.alert("Invalid response, try again");


  //resets to beginning of function so the code doesn't keep going with an invalid response.
  writePassword();

}


//to determine if there will be uppercase characters in the password.
  var uppercasePrompt = window.prompt ("Do you want uppercase? type 1 for yes 2 for no.")

  if(uppercasePrompt == "1"){

  window.alert("You have chosen uppercase");

} else if (uppercasePrompt == "2"){

  window.alert("You do NOT want uppercase");

}
  else{

  window.alert("invalid response, try again");


  //resets to beginning of function so the code doesn't keep going with an invalid response.
  writePassword();

}

  //to determine if there will be numbers in the password.
  var getNumbersPrompt = window.prompt("Do you want numbers in your password? types 1 for yes, and 2 for no");

  if (getNumbersPrompt == "1"){

  window.alert("You do want numbers");

} else if (getNumbersPrompt == "2") {

  window.alert("You do NOT want numbers")

} else {

  window.alert("Invalid response, try again");

  //resets to beginning of function so the code doesn't keep going with an invalid response.
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


  //resets to beginning of function so the code doesn't continue with an invalid response.
  writePassword();

}

  //following code makes sure that at least one character type has been selected, 
  if(lowercasePrompt == "2" && uppercasePrompt == "2" && getNumbersprompt == "2" && specialCharactersPrompt == "2"){

  window.prompt("You need to select at least 1 character type.");

  
  //if at least one character type isn't selected, then it'll reset the function so the code won't continue with a null set for all character types.
  writePassword();

}


  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
