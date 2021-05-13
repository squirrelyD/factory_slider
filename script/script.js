const upperTrack = document.querySelector("#upper");
const lowerTrack = document.querySelector("#lower");
const track = document.querySelector(".slider__track");
const imagesUpper = document.querySelectorAll(".slider__img-upper");
const imagesLower = document.querySelectorAll(".slider__img-lower");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let indexUpper = 1;
let indexLower = 1;
let firstImgUpper = imagesUpper[0].nextElementSibling.clientWidth;
let firstImgLower = imagesLower[0].nextElementSibling.clientWidth;
let sizeUpper = imagesUpper[indexUpper].nextElementSibling.clientWidth;
let sizeLower = imagesLower[indexLower].nextElementSibling.clientWidth;

upperTrack.style.transform = "translateX(" + (firstImgUpper * indexUpper) + "px)"; 
lowerTrack.style.transform = "translateX(" + (firstImgLower * indexLower) + "px)"; 

nextBtn.addEventListener("click", () => {
    if (indexUpper >= imagesUpper.length - 1) return;
    if (indexLower >= imagesLower.length - 1) return;
    upperTrack.style.transition = "transform 0.4s ease-in-out";
    lowerTrack.style.transition = "transform 0.4s ease-in-out";
    indexUpper++;
    indexLower++;
    upperTrack.style.transform = "translateX(" + (sizeUpper * indexUpper) + "px)"; 
    lowerTrack.style.transform = "translateX(" + (sizeLower * indexLower) + "px)"; 
})

prevBtn.addEventListener("click", () => {
    if (indexUpper <= 0) return;
    if (indexLower <= 0) return;
    upperTrack.style.transition = "transform 0.4s ease-in-out";
    lowerTrack.style.transition = "transform 0.4s ease-in-out";
    indexUpper--;
    indexLower--;
    upperTrack.style.transform = "translateX(" + (sizeUpper * indexUpper) + "px)"; 
    lowerTrack.style.transform = "translateX(" + (sizeLower * indexLower) + "px)"; 
})

track.addEventListener("transitionend", () => {
    if (imagesUpper[indexUpper].id === "lastImgUpper") {
        upperTrack.style.transition = "none";
        indexUpper = imagesUpper.length - 2;
        upperTrack.style.transform = "translateX(" + (sizeUpper * indexUpper) + "px)"; 
    }
    if (imagesUpper[indexUpper].id === "firstImgUpper") {
        upperTrack.style.transition = "none";
        indexUpper = imagesUpper.length - indexUpper;
        upperTrack.style.transform = "translateX(" + (sizeUpper * indexUpper) + "px)"; 
    }
    if (imagesLower[indexLower].id === "lastImgLower") {
        lowerTrack.style.transition = "none";
        indexLower = imagesLower.length - 2;
        lowerTrack.style.transform = "translateX(" + (sizeLower * indexLower) + "px)"; 
    }
    if (imagesLower[indexLower].id === "firstImgLower") {
        lowerTrack.style.transition = "none";
        indexLower = imagesLower.length - indexLower;
        lowerTrack.style.transform = "translateX(" + (sizeLower * indexLower) + "px)"; 
    }
})