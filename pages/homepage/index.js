const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.nav--top');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

$(document).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".web-nav").addClass("scroll");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".web-nav").removeClass("scroll");
  }
});

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
var WebLogoBtn = document.querySelector('.web-logo-btn');
var projectsBtn = document.querySelector('.projects-btn');
var mobileProjectsBtn = document.querySelector('.mobile-projects-btn');
var mobileContactBtn = document.querySelector('.mobile-contact-cta');
var contactBtn = document.querySelector('.contact-nav-cta');
var heroContactBtn = document.querySelector('.hero-cta');
var serviceContactBtn = document.querySelector('.service-cta');
var globalContactBtn = document.querySelector('.globe-cta');
var teamBtn = document.querySelector('.team-btn');
var mobileTeamBtn = document.querySelector('.mobile-team-btn');
var aboutBtn = document.querySelector('.about-btn');
var mobileAboutBtn = document.querySelector('.mobile-about-btn');
var whoWeAreAboutBtn = document.querySelector('.who-we-are-cta');
var serviceBtn = document.querySelector('.services-btn');
var mobileServiceBtn = document.querySelector('.mobile-services-btn');
var workWithUsBtn = document.querySelector('.work-with-us');
var mobileWorkWithUsBtn = document.querySelector('.mobile-work-with-us');

var heroEl = document.querySelector('.app-nav-wrapper');
var projectEl = document.querySelector('.projects');
var contactEl = document.querySelector('.contact-section');
var teamEl = document.querySelector('.team-section');
var aboutEl = document.querySelector('.about-us-section');
var serviceEl = document.querySelector('.services-section');
var workWithUsEl = document.querySelector('.team-section__footer');

WebLogoBtn.addEventListener('click', function () {
  heroEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
projectsBtn.addEventListener('click', function () {
  projectEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
mobileProjectsBtn.addEventListener('click', function () {
  showcase.classList.remove('active');
  menuToggle.classList.remove('active');
  projectEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
contactBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
mobileContactBtn.addEventListener('click', function () {
  showcase.classList.remove('active');
  menuToggle.classList.remove('active');
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
heroContactBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
serviceContactBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
mobileServiceBtn.addEventListener('click', function () {
  showcase.classList.remove('active');
  menuToggle.classList.remove('active');
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
globalContactBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
teamBtn.addEventListener('click', function () {
  teamEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
mobileTeamBtn.addEventListener('click', function () {
  showcase.classList.remove('active');
  menuToggle.classList.remove('active');
  teamEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
aboutBtn.addEventListener('click', function () {
  aboutEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
mobileAboutBtn.addEventListener('click', function () {
  showcase.classList.remove('active');
  menuToggle.classList.remove('active');
  aboutEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
whoWeAreAboutBtn.addEventListener('click', function () {
  aboutEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
serviceBtn.addEventListener('click', function () {
  serviceEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
workWithUsBtn.addEventListener('click', function () {
  workWithUsEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});
mobileWorkWithUsBtn.addEventListener('click', function () {
  showcase.classList.remove('active');
  menuToggle.classList.remove('active');
  workWithUsEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});
