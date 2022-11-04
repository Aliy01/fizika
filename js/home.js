const homeLogo = document.querySelector(".home_logo"),
    slideLeft = document.querySelector("fa-chevron-left"),
    slideRight = document.querySelector("fa-chevron-right"),
    slideRow = document.getElementsByTagName(".row"),
    rowLength = getComputedStyle(slideRow);

console.log(rowLength);