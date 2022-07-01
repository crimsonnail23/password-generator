// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//creating a passwordProperties object that should get updated as the user puts in the required info once the writePassword function begins.
//properties other than length are boolean, so that later on when a function that makes the password 
//will check these values to see which character types are needed in the password.

passwordProperties = {

  size: 0,
  
  lowercase: Boolean,

  uppercase: Boolean,

  numbers:Boolean,

  special: Boolean,

  check: Boolean,

  final: " ",

}


//various arrays that need to be pulled from to make password.
var lowercaseLettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

var uppercaseLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharactersArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","~","`","[","]","{","}","|"];


//step 1:combine character arrays based on user input.
//step2:

//following code will pull from the arrays depending on if that passwordProperties value is true or not.
//also, for it work, certain conditions must be met: a password length between 8 and 128, and at least 1 character type must be selected.
function generatePassword(){
  
 

  if(passwordProperties.size>=8 && passwordProperties.size<=128 && passwordProperties.check==true){
    
    //i put an empty array that will be added to dependong on the user inputs. for example, if the user wants to lowercase and special characters, those arrays,
    //will be added to the empty array. and then the password will be chosen from this new array.
    
    var charactersArray = []

    if(passwordProperties.lowercase==true){

      charactersArray=charactersArray.concat(lowercaseLettersArray)

    }

    if(passwordProperties.uppercase==true){

      charactersArray=charactersArray.concat(uppercaseLettersArray)

    }

    if(passwordProperties.numbers==true){

      charactersArray=charactersArray.concat(numbersArray)

    }

    if(passwordProperties.special==true){

      charactersArray=charactersArray.concat(specialCharactersArray)

    }


   
    for(var i=0; i<passwordProperties.size; i++){
     
        var character =charactersArray[Math.floor(Math.random()*charactersArray.length)]

      passwordProperties.final=passwordProperties.final+character

    } 

    
  }

  return passwordProperties.final;

};

//following code will show the password in a window prompt, the text box on the page itself. 
function showPassword(){

  window.alert("Your password is " + passwordProperties.final);

 document.querySelector("#password").textContent = passwordProperties.final;
  


}



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
    passwordProperties.size=getLengthPrompt;

    //console log to check if passwordProperties are getting updated.
    console.log("password length is " + passwordProperties.size + " charcters long.");


  } else{

    window.alert("Invalid repsonse, try again");


    //following code resets to beginning of function so the code doesn't keep going with an invalid response.
    writePassword();

  }
// following code to determine if there will be lowercase characters in the password.
  var lowercasePrompt = window.prompt("Do you want lowercase? type 1 for yes, 2 for no")

  if(lowercasePrompt == "1"){

    window.alert("You want lowercase characters in your password.");

    
    passwordProperties.lowercase= true;

    
    console.log("lowercase: " + passwordProperties.lowercase);

} else if(lowercasePrompt == "2") {

    window.alert("You do NOT want lowercase characters in your password.");

    passwordProperties.lowercase=false;

    console.log("lowercase:" + passwordProperties.lowercase);

} else {

  window.alert("Invalid response, try again");


  //following code resets to beginning of function so the code doesn't keep going with an invalid response.
  writePassword();

}


  //following code to determine if there will be uppercase characters in the password.
  var uppercasePrompt = window.prompt ("Do you want uppercase? type 1 for yes 2 for no.")

  if(uppercasePrompt == "1"){

  window.alert("You do want uppercase");

  passwordProperties.uppercase=true;

  console.log("uppercase: " + passwordProperties.uppercase);


} else if (uppercasePrompt == "2"){

  window.alert("You do NOT want uppercase");

  passwordProperties.uppercase=false;

  console.log("uppercase: " + passwordProperties.uppercase);

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

  passwordProperties.numbers= true;

  console.log("numbers: " + passwordProperties.numbers)

} else if (getNumbersPrompt == "2") {

  window.alert("You do NOT want numbers")

  passwordProperties.numbers=false;

  console.log("numbers: " + passwordProperties.numbers);

} else {

  window.alert("Invalid response, try again");

  //following code resets to beginning of function so the code doesn't keep going with an invalid response.
  writePassword();

}

  // following code determines if the password will have special characters ot not
  var specialCharactersPrompt = window.prompt("Do you want special characters? type 1 for yes, and 2 for no");

  if (specialCharactersPrompt == "1") {

  window.alert("You do want special characters");

  passwordProperties.special=true;

  console.log("special: " + passwordProperties.special);  

} else if (specialCharactersPrompt == "2"){

  window.alert("you do NOT want special characters");

  passwordProperties.special=false;

  console.log("special characters: " + passwordProperties.special);

} else {

  window.alert("Invalid Response");


  //following code resets to beginning of function so the code doesn't continue with an invalid response.
  writePassword();

}

  //following code makes sure that at least one character type has been selected,
  
  if(lowercasePrompt == "2" && uppercasePrompt == "2" && getNumbersPrompt == "2" && specialCharactersPrompt == "2"){

  window.alert("You need to select at least 1 character type.");

  passwordProperties.check= false;

  console.log("check: " + passwordProperties.check);

  
  //if at least one character type isn't selected, then it'll reset the function so the code won't continue with a null set for all character types.
  writePassword();

} else{

  passwordProperties.check= true;
  console.log("check: " + passwordProperties.check)

}



  generatePassword();
  var passwordText = document.querySelector("#password");

  showPassword();

  




}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


