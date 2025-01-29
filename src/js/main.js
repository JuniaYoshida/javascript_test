// console.log("hello world!");

// var price = 50;

// console.log(price * 2);

// var firstname = "Soba";

// console.log("Do you hear it " + firstname);

// function sayHello(firstname) {
//   console.log("hello " + firstname);
// }

// sayHello("Soba");
// sayHello("Kelo");
// sayHello("Eko");
// sayHello("CHaAAaaaAarles");

// function getPriceInDollars(price) {
//   console.log(price * 1.16);
// }

// getPriceInDollars(50);

// console.log(window.outerWidth);

// var button = document.querySelector(".button");

// console.log(button.innerHTML);
// console.log(button.clientHeight);

// function changeText() {
//   button.innerHTML = "what have you done to mee!?!";
//   button.style.fontSize = "100px";
//   button.classList.add("is-active");
// }

// button.addEventListener("mouseenter", changeText);

for (var i = 1; i > 10; i++) {
  console.log(i);
}

var links = document.querySelectorAll(".link");

links.forEach(function (link) {
  console.log(link);
  link.style.color = "blue";
});

var age = 18;

if (age > 17) {
  console.log("vous êtes majeure-e!");
} else {
  console.log("vous êtes mineur-e");
}

var language = "french";

if (language == "french") {
  console.log("bonjour");
} else {
  console.log("hello");
}
