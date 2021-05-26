let changeHeader = document.querySelector("#page-header");

changeHeader.style.textAlign = "left";

let borders = document.querySelectorAll(".dog-image");

for (let i = 0; i < borders.length; i++) {
  borders[i].style.borderRadius = "50px"
  borders[i].style.border = "10px solid"
  borders[i].style.transform = "rotate(180deg)"
}

let leftNames = document.querySelectorAll(".dog-name")

leftNames.forEach(n => {
  n.style.textAlign = "left"
})

let footerColor = document.querySelector(".footer")

footerColor.style.color = "purple"

