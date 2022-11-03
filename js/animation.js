const btnMain = document.querySelector(".fa-f"),
    main = document.querySelector(".main"),
    home = document.querySelector(".home");
btnMain.addEventListener("click", () => {
    main.style.display = "none"
    home.style.display = "flex"

    // if (home.style.disply == flex) {
    //     main.style.position = "absolute"
    //     console.log("10");
    // }
})