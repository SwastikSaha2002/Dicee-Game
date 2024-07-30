 // for player 1 dice.

var roll1 = (Math.random() * 6) + 1; // to get ones place value from 0 to 6.
var roundoff1 = Math.floor(roll1); // rounding off to the nearest integer.
var selector = document.querySelector('.img1');
var diceimg1 = ("./images/dice" + roundoff1 + ".png"); //dice1.png to dice6.png.
selector.setAttribute("src", diceimg1); 
    


// For player 2 dice.

var roll2 = (Math.random() * 6) + 1; 
var roundoff2 = Math.floor(roll2);
var selector2 = document.querySelector('.img2');
var diceimg2 = ("./images/dice" + roundoff2 + ".png");
selector2.setAttribute("src", diceimg2);

// Winning Statement.

var resultdeclaration = document.querySelector("h1");
if(roundoff2 > roundoff1){
    resultdeclaration.innerText = "Player 2 Wins !🚩";
}
else if(roundoff1 > roundoff2){
    resultdeclaration.innerText = "🚩Player 1 Wins !";
}
else{
    resultdeclaration.innerText = "🚩It's A Tie !🚩";
}
