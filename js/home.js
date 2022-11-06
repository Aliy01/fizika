const homeLogo = document.querySelector(".home_logo"),
    span = document.querySelectorAll(".span"),
    slideLeft = document.querySelector("fa-chevron-left"),
    slideRight = document.querySelector("fa-chevron-right"),
    // slideRow = document.getElementsByTagName(".row"),
    // rowLength = getComputedStyle(slideRow),
    aboutBtn = document.querySelector("#about-btn"),
    submit = document.querySelector(".submit"),
    aboutPage = document.querySelector(".about"),
    navbar = document.querySelector(".navbar"),
    homeBbtn = document.querySelector(".home-btn"),
    homeField = document.querySelector(".home-field"),
    iconBar = document.querySelector(".fa-bars");

homeBbtn.addEventListener("click", () => {
    homeField.style.display = "flex"
    aboutPage.style.display = "none"
    navbar.style.background = " #fff"
    navbar.style.display = "flex";

    // navbar.style.flexDirection = "row"
})
aboutBtn.addEventListener("click", () => {
    aboutPage.style.display = "flex"
    homeField.style.display = "none"
    navbar.style.display = "flex"
    navbar.style.background = " rgba(100, 255, 255, .6)";
    aboutPage.style.flexDirection = "column"
        // navbar.style.flexDirection = "column"
        // navbar.style.width = 20 + "px"
        // navbar.style.height = 500 + "px"
})
submit.addEventListener("click", () => {
    aboutPage.style.display = "flex"
    homeField.style.display = "none"
    navbar.style.display = "flex"
    navbar.style.background = " rgba(100, 255, 255, .6)";
    aboutPage.style.flexDirection = "column"
        // navbar.style.flexDirection = "column"
        // navbar.style.width = 20 + "px"
        // navbar.style.height = 500 + "px"
})