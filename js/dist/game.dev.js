"use strict";

var game = document.querySelector('.fa-gamepad'),
    gameField = document.querySelector('.game');
game.addEventListener("click", function () {
  game.style.display = "flex";
  mainPage.style.display = "none";
  homePage.style.display = "none";
  aboutPage.style.display = "none";
});