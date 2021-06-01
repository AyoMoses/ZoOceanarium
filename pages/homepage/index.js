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
var projectsBtn = document.querySelector('.projects-btn');
var contactBtn = document.querySelector('.mobile-contact-cta');
var teamBtn = document.querySelector('.team-btn');
var aboutBtn = document.querySelector('.about-btn');
var serviceBtn = document.querySelector('.services-btn');
var workWithUsBtn = document.querySelector('.work-with-us');

var projectEl = document.querySelector('.projects');
var contactEl = document.querySelector('.contact-section');
var teamEl = document.querySelector('.team-section');
var aboutEl = document.querySelector('.about-us-section');
var serviceEl = document.querySelector('.services-section');
var workWithUsEl = document.querySelector('.team-section__footer');

projectsBtn.addEventListener('click', function () {
  // showcase.style.display = "none";
  // menuToggle.classList.toggle('active');
  projectEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  console.log("this is me working")
});
contactBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  console.log("this is me working")
});
teamBtn.addEventListener('click', function () {
  teamEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  console.log("this is me working")
});
aboutBtn.addEventListener('click', function () {
  aboutEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  console.log("this is me working")
});
serviceBtn.addEventListener('click', function () {
  serviceEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  console.log("this is me working")
});
workWithUsBtn.addEventListener('click', function () {
  workWithUsEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  console.log("this is me working")
});
