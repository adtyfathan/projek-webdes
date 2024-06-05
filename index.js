let activeSlide = 2;

setSlideHeader();

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
        document.querySelector(".slide-header").innerHTML = "URUS"
        document.querySelector(".slide-sub").innerHTML = "DARE TO LIVE MORE"
    } else if (activeSlide == 1) {
        document.querySelector(".slide-header").innerHTML = "HURACAN"
        document.querySelector(".slide-sub").innerHTML = "BEYOND THE CONCRETE"
    } else if (activeSlide == 2) {
        document.querySelector(".slide-header").innerHTML = "REVUELTO"
        document.querySelector(".slide-sub").innerHTML = "FROM NOW ON"
    }
}