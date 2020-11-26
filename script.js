var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialChars = ["!","@","#","$","%","^","&","*","(",")"];

function GeneratePassword() {
    //variable declerations
    var includedChars = [];
    var forcedChars = [];
    var passwordArray = [];
    var passwordLength = prompt("how long would you like the length of the password to be");
    var password = ""; //string variable to display the password

    //check for passwordLength to make sure its a number between 8 and 128 and it's not a string
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { 
        passwordLength = prompt("please enter a number between 8 and 128");   
    }

    //do while loop to make sure at least one cirteria is choosen
    do{
        var includeLC = confirm("would you like the password to include Lowercase letters?");
        var includeUC = confirm("would you like the password to include Uppercase letters?");
        var includeNum = confirm("would you like the password to include numbers?");
        var includeSC = confirm("would you like the password to include special charaters?");
        if(!includeLC & !includeUC & !includeNum & !includeSC){
            alert("Please choose at least one criteria")
        }
    }
        
    while(!includeLC & !includeUC & !includeNum & !includeSC);

    //add included character to the includeChars array
    function addCharacters (characters){
        includedChars = includedChars.concat(characters);
        forcedChars.push(characters[Math.floor(Math.random()*characters.length)])
    }

    //adding characters to includedChars, the password will be choosen from the new array.
    if(includeLC){
        addCharacters(lowerCase);  
    }

    if(includeUC){
        addCharacters(upperCase);    
    }
    if(includeNum){
        addCharacters(numbers)   
    }
    if(includeSC){
        addCharacters(specialChars);
    }

    for(var i= 0; i<passwordLength;i++){
        passwordArray.push(includedChars[Math.floor(Math.random()*includedChars.length)]) ;
    }
    
    //splice the last few elemets of the password and push the froced chars to make sure it includes the 
    // all of the required characters
    passwordArray.splice((passwordArray.length-forcedChars.length), forcedChars.length);
    for(var i=0; i<forcedChars.length;i++){
        passwordArray.push(forcedChars[i]);
    }

    

    
    //converted the password array into a string
    for(var i=0; i<passwordLength;i++){
        password += passwordArray[i];
    }
    //display the password in the HTML file
    document.getElementById("passwordText").innerHTML = password;
    
}

// when the generate button is click the application starts.
document.getElementById("generate").addEventListener("click",  function(){
    GeneratePassword();
});