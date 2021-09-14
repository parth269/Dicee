var rand1 = Math.floor((Math.random()*6)+1);
var rand2 = Math.floor((Math.random()*6)+1);
var randImageSource1="images/dice"+rand1+".png"
var randImageSource2="images/dice"+rand2+".png"
document.querySelector(".img1").setAttribute("src",randImageSource1);
document.querySelector(".img2").setAttribute("src",randImageSource2);
if(rand1>rand2){
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(rand2>rand1){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩 ";
}
else{
  document.querySelector("h1").innerHTML="DRAW:)";
}
