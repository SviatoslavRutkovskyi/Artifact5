// JavaScript source code
var myImages = ["images/resume.jpg", "images/chessboard.jpg", "images/rhombus.png", "images/form_verification.png", "images/slideshow.png"];


var captionImages = ["Artifact 1: Resume", "Artifact 2: Chessboard", "Artifact 3: Rhombus", "Artifact 4: Form Verification", "Artifact 5: Resume"];

var index = 0;

function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next() {
    if (myImages.length == index + 1)
        index = 0;
    else
        index++;
    updateImage();
}


function back() {
    if (index === 0)
        index = myImages.length - 1;
    else
        index--;

    updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false); 

function autoSlide() {
    if (document.getElementById("auto").checked)
        next();
}


setInterval(autoSlide, 2000);