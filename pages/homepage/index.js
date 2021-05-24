const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.nav--top');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

// ABOUT US SLIDER
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {

  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);

}

changeSlide();

// ABOUT US SLIDER

// ABOUT US SECTION THUMBNAIL SLIDER
function changeimg(url, e) {
  document.getElementById("img").src = url;
  let nodes = document.getElementById("thumb_img");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
  console.log('it works');
}


// SCROLL TO VIEW
var downBtn = document.querySelector('.scroll-down-btn');
var aboutBtn = document.querySelector('.to-abt-btn');
var workExpBtn = document.querySelector('.work-btn');
var contactBtn = document.querySelector('.contact-btn');

var aboutEl = document.querySelector('.about-section');
var workEl = document.querySelector('.work-section');
var contactEl = document.querySelector('.contact-section');

downBtn.addEventListener('click', function () {
  aboutEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});
aboutBtn.addEventListener('click', function () {
  aboutEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});
workExpBtn.addEventListener('click', function () {
  workEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
contactBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
