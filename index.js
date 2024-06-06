import { data } from "./datas.js";

let activeSlide = 2;

// console.log(data);

data.map(x => {
    console.log(x.model);
});

setSlideHeader();

document.getElementById("sub-slide").addEventListener("click", subtSlide);
document.getElementById("add-slide").addEventListener("click", addSlide);

function addSlide() {
    document.querySelectorAll("[data-index]")[activeSlide].classList.remove("active");
    activeSlide = (activeSlide + 1) % 3;
    document.querySelectorAll("[data-index]")[activeSlide].classList.add("active");
    setSlideHeader();
}

function subtSlide() {
    document.querySelectorAll("[data-index]")[activeSlide].classList.remove("active");
    activeSlide = (activeSlide + 2) % 3;
    document.querySelectorAll("[data-index]")[activeSlide].classList.add("active");
    setSlideHeader();
}

function setSlideHeader() {
    if (activeSlide == 0) {
        document.querySelector(".slide-header").innerHTML = "PORSCHE 911"
        document.querySelector(".slide-sub").innerHTML = "PORSCHE"
    } else if (activeSlide == 1) {
        document.querySelector(".slide-header").innerHTML = "F8 TRIBUTO"
        document.querySelector(".slide-sub").innerHTML = "FERRARI"
    } else if (activeSlide == 2) {
        document.querySelector(".slide-header").innerHTML = "REVUELTO"
        document.querySelector(".slide-sub").innerHTML = "LAMBORGHINI"
    }
}