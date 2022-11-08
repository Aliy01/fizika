const game = document.querySelector('.fa-gamepad'),
    gameField = document.querySelector('.game')


game.addEventListener("click", () => {
    game.style.display = "flex"
    mainPage.style.display = "none"
    homePage.style.display = "none"
    aboutPage.style.display = "none"
})