"use strict";
console.clear();

//Prendere elementi dall'Html
const elParagraph = document.getElementById("firstP");
const title = document.querySelector(".titleColor");

const button = document.getElementById("cambiaP");

//console.dir(elParagraph);

// console.log(elParagraph.innerText);

console.log(elParagraph.innerHTML);
// console.log(elParagraph.outerHTML);

//title.style.color = "red";

// console.log(title.className);
// title.className += " pluto";
// console.log(title.className);

console.log(title.classList.value);

// element.classList.value
//element.classList.add('nomeclasse')
//element.classList.remove('nomeclasse')
//element.classList.toggle('nomeclasse')
const initParagraph = elParagraph.innerHTML;

button.addEventListener("click", function () {
  elParagraph.innerHTML = "";
  elParagraph.innerHTML +=
    "Lorem ipsum <strong>dolor sit amet</strong> <strong>Ciao nuovo contenuto</strong>";
});

// button.addEventListener("click", parClick);
// function parClick(){
//     elParagraph.innerHTML = "";
//   elParagraph.innerHTML +=
//     "Lorem ipsum <strong>dolor sit amet</strong> <strong>Ciao nuovo contenuto</strong>";
// }

title.addEventListener("click", function () {
  title.classList.toggle("titleColor2");
});

const buttonImg = document.getElementById("cambiaImg");
console.log(buttonImg);

const firstImage = document.querySelector("img");
console.log(firstImage);

buttonImg.addEventListener("click", function () {
  console.log(firstImage.src);
  if (firstImage.src.includes("img/dadi/1.svg")) {
    firstImage.src = "img/dadi/2.svg";
    firstImage.alt = "dadi2";
    elParagraph.innerHTML = "Visualizzato dado 2";
  } else {
    firstImage.src = "img/dadi/1.svg";
    firstImage.alt = "dadi1";
    elParagraph.innerHTML = "Visualizzato dado 1";
  }
});

const section = document.querySelector(".container");

// section.innerHTML += `
// <div class="bg-red">Nuovo div</div>

// `;

const newDiv = document.createElement("div");
newDiv.innerText = "Nuovo div";

newDiv.classList.add("bg-red");

newDiv.addEventListener("click", function () {
  newDiv.classList.toggle("bg-blue");
});

section.appendChild(newDiv);
