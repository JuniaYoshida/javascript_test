console.log("hello world!");

var price = 50;

console.log(price * 2);

var firstname = "Soba";

console.log("Do you hear it " + firstname);

function sayHello(firstname) {
  console.log("hello " + firstname);
}

sayHello("Soba");
sayHello("Kelo");
sayHello("Eko");
sayHello("CHaAAaaaAarles");

function getPriceInDollars(price) {
  console.log(price * 1.16);
}

getPriceInDollars(50);

console.log(window.outerWidth);

var button = document.querySelector(".button");

console.log(button.innerHTML);
console.log(button.clientHeight);

function changeText() {
  button.innerHTML = "what have you done to mee!?!";
  button.style.fontSize = "100px";
  button.classList.add("is-active");
}

button.addEventListener("mouseenter", changeText);
