// Assignment code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


function generateNewPassword() {
    var passwordlength = prompt(
      "How many characters would you like your password to be?"
    );
      if (passwordlength < 8 || passwordlength > 128) {
      alert("Please enter a password between 8 and 128 characters.");
      document.getElementById("password").value = "";
      return;
    }
    var upperCase = false;
    var lowerCase = false;
    var numbers = false;
    var symbols = false;


    upperCase = confirm("Would you like uppercase letters in your password?");
    lowerCase = confirm("Would you like lowercase letters in your password?");
    numbers = confirm("Would you like numbers in your password?");
    symbols = confirm("Would you like special characters in your password?");


    var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbersArray = ["1","2","3","4","5","6","7","8","9","0"];
    var symbolsArray = ["!","@","#","$","%","^","&","*","(",")"];


    var userChoices = [];
    if (upperCase) {
      userChoices = userChoices.concat(upperCaseArray);
    }
    if (lowerCase) {
      userChoices = userChoices.concat(lowerCaseArray);
    }
    if (numbers) {
      userChoices = userChoices.concat(numbersArray);
    }
    if (symbols) {
      userChoices = userChoices.concat(symbolsArray);
    } 
    if (userChoices === undefined || userChoices.length == 0) {
      alert("Please enter valid requirements for password.");
      document.getElementById("password").value = "";
      return;
  } 
     

    
    document.getElementById("password").value = "";
    console.log(userChoices);
    console.log(userChoices.length)
    for (var i = 0; i < passwordlength; i++) {
    var randomPasswordNum = Math.floor(Math.random() * userChoices.length);
    console.log(randomPasswordNum);
    document.getElementById("password").value += userChoices[randomPasswordNum];
    }
  }
   
 
 
// Add event listener to generate button
generateBtn.addEventListener("click", generateNewPassword);
