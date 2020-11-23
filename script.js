var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':',
    ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var password = "";

function GeneratePassword() {
    password = "";
    var passwordLength = prompt("how long would you like the length of the password to be");
    //check for passwordLength to make sure its a number between 8 and 128
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        //check if passwordLength is a string
        if (isNaN(passwordLength)) {
            passwordLength = prompt("please enter a number between 8 and 128 not a String");
        } else {
            passwordLength = prompt("please enter a number between 8 and 128");
        }
    }

    // var includeLowerCase = confirm("does the password have Lowercase letters?")
    // var includeUpperCase = confirm("does the password have Uppercase letters?")
    // var includeNmbers = confirm("does the password have Numbers letters?")
    // var includeSpecialCharacters = confirm("does the password have Special Characters letters?")

    for(var i=0; i<passwordLength; i++){
        var arrIndex = Math.floor(Math.random()*26);
        password += lowercaseLetters[arrIndex];
    }
    document.getElementById("passwordText").innerHTML = password;
    
}


// when the generate button is click the application starts.
document.getElementById("generate").addEventListener("click", function () {
    GeneratePassword();
});