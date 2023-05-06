    /*for about-nav*/
    const menu = document.getElementById('bars-container');
    const navLinks = document.getElementById('nav-links');
    
    menu.addEventListener('click', () => {
      navLinks.classList.toggle('fade-in');
    });
    

function toggleBars(x){
    x.classList.toggle("change")
}
  /*for about me slides*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    } 
});
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" pagnation", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " pagnation";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
};

function toggleIframe() {
    const iframe = document.getElementById("resume");
    if (iframe.style.opacity === "0" || iframe.style.opacity === "") {
      iframe.style.opacity = "1";
    } else {
      iframe.style.opacity = "0";
    }
  }


