const animation = document.querySelector(".animation"),
    animationBtn = document.querySelector(".animation-btn"),
    contact = document.querySelector("#contact-me"),
    fieldDev = document.querySelector(".contactDev"),
    closeBtn = document.querySelector(".close"),
    body = document.querySelector("body");

animationBtn.addEventListener("click", () => {
    animation.style.display = "flex"
    mainPage.style.display = "none"
    homeField.style.display = "none"
    aboutPage.style.display = "none"
    footer.style.display = "flex"

    navbar.style.display = "flex"
    navbar.style.background = "#fff"



    if (animationBtn == "true") {
        alert("this page isn't full work")
    }
})
contact.addEventListener("click", () => {
    fieldDev.style.display = "flex"
    animation.style.position = "absolute"
    footer.style.display = "none"
    navbar.style.position = "absolute"
    body.style.height = 695 + "px"
})
closeBtn.addEventListener("click", () => {
    fieldDev.style.display = "none"
    navbar.style.position = "relative"
    animation.style.position = "relative"
    footer.style.display = "flex"


})