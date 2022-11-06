"use strict";

var animation = document.querySelector(".animation"),
    animationBtn = document.querySelector(".animation-btn");
animationBtn.addEventListener("click", function () {
  animation.style.display = "none";
  animation.style.width = 100 + "px";
  mainPage.style.display = "none";
  homePage.style.display = "none";
  aboutPage.style.display = "none";
  footer.style.display = "none";

  if (animation.style.width == "100px") {
    alert("this page isn't work");
  }
});