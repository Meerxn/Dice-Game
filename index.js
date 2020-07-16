var max = 6;
var min = 1;
var str1 = ".img1";
var str2 = ".img2";

var randomNumberOne =  Math.floor(Math.random() * (max - min + 1)) + min;
var randomNumberTwo =  Math.floor(Math.random() * (max - min + 1)) + min;

function picChange(number,strVal){
if(number === 1) {
    document.querySelector(strVal).setAttribute("src" , "images/dice1.png"); 


}
else if(number === 2) {
    document.querySelector(strVal).setAttribute("src" , "images/dice2.png"); 
}
else if(number=== 3) {
    document.querySelector(strVal).setAttribute("src" , "images/dice3.png"); 
}
else if(number=== 4) {
    document.querySelector(strVal).setAttribute("src" , "images/dice4.png"); 
}
else if(number=== 5 ){
    document.querySelector(strVal).setAttribute("src" , "images/dice5.png"); 
}
else if( number=== 6) {
    document.querySelector(strVal).setAttribute("src" , "images/dice6.png"); 
}


}
picChange(randomNumberOne,str1);
picChange(randomNumberTwo,str2);
if (randomNumberOne > randomNumberTwo){
  document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if (randomNumberOne < randomNumberTwo){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
  }
else if (randomNumberOne === randomNumberTwo){
    document.querySelector("h1").innerHTML = "Draw"
  }