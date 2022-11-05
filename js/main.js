const btnMain = document.querySelector(".main-logo"),
    mainPage = document.querySelector(".main"),
    homePage = document.querySelector(".home"),
    footer = document.querySelector(".footer");

btnMain.addEventListener("click", () => {
    mainPage.style.display = "none"
    homePage.style.display = "flex"
    homePage.style.position = "relative"
    footer.style.display = "flex"


    // if (home.style.disply == flex) {
    //     main.style.position = "absolute"
    //     console.log("10");
    // }
})