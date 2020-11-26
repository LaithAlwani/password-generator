var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialChars = ["!","@","#","$","%","^","&","*","(",")"];


function GeneratePassword() {
    //variable declerations
    var includedChars = [];
    var forcedChars = [];
    var password = [];
    var passwordLength = prompt("how long would you like the length of the password to be");

    //check for passwordLength to make sure its a number between 8 and 128 and it's not a string
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { 
        passwordLength = prompt("please enter a number between 8 and 128");   
    }

    //do while loop to make sure at least one cirteria is choosen
    do{
        var includeLC = confirm("include Lowercase letters?");
        var includeUC = confirm("include Uppercase letters?");
        var includeNum = confirm("include Numbers?");
        var includeSC = confirm("include Special Chars?");
    }
        
    while(!includeLC & !includeUC & !includeNum & !includeSC);

    //checking password criteria
    if(includeLC){
        includedChars = includedChars.concat(lowerCase);
        forcedChars.push(lowerCase[Math.floor(Math.random()*lowerCase.length)])
        console.log(forcedChars);
    }

    
    if(includeUC){
        includedChars = includedChars.concat(upperCase);
        forcedChars.push(upperCase[Math.floor(Math.random()*upperCase.length)])
        console.log(forcedChars);
    }
    if(includeNum){
        includedChars = includedChars.concat(numbers);
        forcedChars.push(numbers[Math.floor(Math.random()*numbers.length)])
        console.log(forcedChars);
    }

    if(includeSC){
        includedChars = includedChars.concat(specialChars);
        forcedChars.push(specialChars[Math.floor(Math.random()*specialChars.length)])
        console.log(forcedChars);
    }

    for(var i= 0; i<passwordLength;i++){
        password.push(includedChars[Math.floor(Math.random()*includedChars.length)]) ;
    }
    
    //spliced the last few elemets of the password and push the froced chars to make sure it includes the 
    // all of the required characters
    password.splice(password.length-forcedChars.length, forcedChars.length);
    for(var i=0; i<forcedChars.length;i++){
        password.push(forcedChars[i]);
    }

    //string variable to display the password
    var thePassword = "";

    
    //converted the password array into a string
    for(var i=0; i<passwordLength;i++){
        akherKalam += password[i];
    }
    //display the password in the HTML file
    document.getElementById("passwordText").innerHTML = thePassword;
    
}

// when the generate button is click the application starts.
document.getElementById("generate").addEventListener("click",  function(){
    GeneratePassword();
});