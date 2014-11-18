//write a function that counts up
//write a function that counts down, put a conditional that checks for less than 0
//write an on.click jquery method to run the count up function each time it is clicks
//write an on.click jquery method to run a count backwards function each time it cliks
//write code the writes the result of the function on the screen.


//this function is close to working- it changes the text on click but doesn't count
//maybe use counting loop tied to onclick?

var countingNumber = 0;

function countingUp(){
  if(countingNumber>0){
   document.getElementById("message").innerHTML="Push + (plus) to count up and - (minus) to count down.";
  }
  countingNumber=countingNumber +1;
  document.getElementById("count").innerHTML=countingNumber;


}

  var countUp=document.getElementById("countUp");
  countUp.onclick = countingUp;


function countingDown(){
  if(countingNumber === 0){
    document.getElementById("message").innerHTML="You can not count lower than zero with this counter. Sorry! Push + (plus) to count up.";
  }
  else
  countingNumber=countingNumber -1;
  document.getElementById("count").innerHTML=countingNumber;


}

  var countDown=document.getElementById("countDown");
  countDown.onclick = countingDown;


//start code for other team's counter here
var countingNumberThem = 0;

function countingUpThem(){
  if(countingNumberThem>0){
   document.getElementById("message").innerHTML="Push + (plus) to count up and - (minus) to count down.";
  }
  countingNumberThem=countingNumberThem +1;
  document.getElementById("countThem").innerHTML=countingNumberThem;


}

  var countUpThem=document.getElementById("countUpThem");
  countUpThem.onclick = countingUpThem;


function countingDownThem(){
  if(countingNumberThem === 0){
    document.getElementById("message").innerHTML="You can not count lower than zero with this counter. Sorry! Push + (plus) to count up.";
  }
  else
  countingNumberThem=countingNumberThem -1;
  document.getElementById("countThem").innerHTML=countingNumberThem;


}

  var countDownThem=document.getElementById("countDownThem");
  countDownThem.onclick = countingDownThem;
