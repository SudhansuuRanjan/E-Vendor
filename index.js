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
  textS.innerHTML="We make sure your online business runs smoothly beyond the buy button, so you can captive consumers with next-level-experiences.We make sure your online business runs smoothly beyond the buy button, so you can captive consumers with next-level-experiences.";

  var textB = document.querySelector(".feature-text-head");
  textB.innerHTML="Persona Specific Statement where are there is Describing Ideal Outcome from Using sticky.io feedbacks are givem.";

}
function Fbtn2() {
  var element1 = document.querySelector(".feature-btn1");
 var element2 = document.querySelector(".feature-btn3");
  element1.classList.remove("btn-style");
  element2.classList.remove("btn-style");
  var element1 = document.querySelector(".feature-btn2");
  element1.classList.add("btn-style");

  var textS = document.querySelector(".feature-text-explain");
  textS.innerHTML="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, saepe laborum. Debitis ab commodi quia architecto eum iusto voluptatum asperiores repellendus omnis, aut animi fugiat dolorem. Vero sed labore ad?";
  
  var textB = document.querySelector(".feature-text-head");
  textB.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sunt tempore ullam aspernatur soluta modi.";
}
function Fbtn3() {
  var element1 = document.querySelector(".feature-btn1");
  var element2 = document.querySelector(".feature-btn2");
  element1.classList.remove("btn-style");
  element2.classList.remove("btn-style");
  var element1 = document.querySelector(".feature-btn3");
  element1.classList.add("btn-style");

  var textS = document.querySelector(".feature-text-explain");
  textS.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias blanditiis id repellendus dolor quidem accusantium quae amet harum in reprehenderit voluptas nesciunt adipisci sunt fugit quas, cum iure dolores.";
  
  var textB = document.querySelector(".feature-text-head");
  textB.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci dolorum dolor magnam repellat nam?";

}

var names ;
function getName(){
   names = document.querySelector(".text_box");
}


function updateCoin(){
    if( coins > 15 ){
       coins = coins - 15 ;
       document.querySelector(".coin-number").innerHTML = coins ;
       alert("Purchase Successful !!\nThank You for shopping with us.");
    }
    if (coins <= 0 ){
      alert("Not enough Credits for shopping !!");
      document.querySelector(".coin-number").innerHTML = coins ;
    }
}

