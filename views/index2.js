console.log("dhfjgdhgjf");
var coins = 50 ;

function addClass() {
  var element = document.querySelector(".mob-screen");
  element.classList.add("mob-screen-left0");
}

function removeClass() {
  var element = document.querySelector(".mob-screen");
  element.classList.remove("mob-screen-left0");
}

function ShowPopup() {
  var element = document.querySelector(".shadow");
  element.classList.add("popup-display");
}

function Fbtn1() {
 var element1 = document.querySelector(".feature-btn2");
 var element2 = document.querySelector(".feature-btn3");
  element1.classList.remove("btn-style");
  element2.classList.remove("btn-style");
  var element1 = document.querySelector(".feature-btn1");
  element1.classList.add("btn-style");

  var textS = document.querySelector(".feature-text-explain");
  textS.innerHTML="Touchless vending , which reduces the chances of getting covid.";

  var textB = document.querySelector(".feature-text-head");
  textB.innerHTML="Contactless vending";

}
function Fbtn2() {
  var element1 = document.querySelector(".feature-btn1");
 var element2 = document.querySelector(".feature-btn3");
  element1.classList.remove("btn-style");
  element2.classList.remove("btn-style");
  var element1 = document.querySelector(".feature-btn2");
  element1.classList.add("btn-style");

  var textS = document.querySelector(".feature-text-explain");
  textS.innerHTML="Smooth web app for absolute shopping experience. All type of credit and debit cards accepted and Receipt mailed instantly";
  
  var textB = document.querySelector(".feature-text-head");
  textB.innerHTML="Seamless UI & Unified Payment system";
}
function Fbtn3() {
  var element1 = document.querySelector(".feature-btn1");
  var element2 = document.querySelector(".feature-btn2");
  element1.classList.remove("btn-style");
  element2.classList.remove("btn-style");
  var element1 = document.querySelector(".feature-btn3");
  element1.classList.add("btn-style");

  var textS = document.querySelector(".feature-text-explain");
  textS.innerHTML="Awesome collection , Buy products in just one tap , Saving yor time with reducing the time wastage in standing in queues.";
  
  var textB = document.querySelector(".feature-text-head");
  textB.innerHTML="One Touch Shopping";

}

var names ;
function getName(){
   names = document.querySelector(".text_box");
}


function updateCoin(){
    if( coins > 15 ){
       coins = coins - 15 ;
       document.querySelector(".coin-number").innerHTML = coins ;
       alert("Thank You for shopping with us.");
    }
    if (coins <= 0 ){
      alert("Not enough Credits for shopping !!");
      document.querySelector(".coin-number").innerHTML = coins ;
    }
}

