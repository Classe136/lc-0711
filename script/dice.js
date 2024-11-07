"use strict";
console.clear();

const buttonPlay = document.getElementById("play");
const playground = document.getElementById("playground");
playground.classList.add("d-none");

buttonPlay.addEventListener("click", playDices);

function playDices() {
  playground.classList.remove("d-none");
  const pcNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  const pUserNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  const dadoPc = document.getElementById("dadoPc");
  const dadUser = document.getElementById("dadoUser");
  dadoPc.src = "./img/dadi/" + pcNumber + ".svg";
  dadUser.src = "./img/dadi/" + pUserNumber + ".svg";
}
