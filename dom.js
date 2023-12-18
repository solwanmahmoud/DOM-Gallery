var imgsList = Array.from(document.getElementsByClassName("img-item"));
var lightBoxContainer = document.querySelector(".lightbox-container");
var lightBoxItem = document.querySelector(".lightbox-item");
var currentIndex;
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var closeButton = document.getElementById("close");

for (var i = 0; i < imgsList.length; i++) {
  imgsList[i].addEventListener("click", function (e) {
    currentIndex = imgsList.indexOf(e.target);
    var imgSrc = e.target.getAttribute("src");
    lightBoxContainer.classList.replace("d-none", "d-flex");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  });
}
function nextSlide() {
      currentIndex++;

  if (currentIndex == imgsList.length) {
    currentIndex = 0;
  }
  var imgSrcc = imgsList[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrcc})`;
}
function prevSlide() {
    currentIndex--;

if (currentIndex == -1) {
  currentIndex = imgsList.length-1;
}
var imgSrcc = imgsList[currentIndex].getAttribute("src");
lightBoxItem.style.backgroundImage = `url(${imgSrcc})`;
}

function closeSlide() {
    lightBoxContainer.classList.replace("d-flex","d-none");
}
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
closeButton.addEventListener("click", closeSlide);

document.addEventListener("keydown",function(e){
    if(e.key =="ArrowRight"){
        nextSlide();
    }else if(e.key =="ArrowLeft"){ 
        prevSlide();
    }else if(e.key =="Escape"){ 
        closeSlide();
    }
})




