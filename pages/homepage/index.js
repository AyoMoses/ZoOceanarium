// NAVBAR
// let mainListDiv = document.getElementById("mainListDiv"),
//   mediaButton = document.getElementById("mediaButton");

// mediaButton.onclick = function () {

//   "use strict";

//   mainListDiv.classList.toggle("show_list");
//   mediaButton.classList.toggle("active");
//   console.log('it works');

// };

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})


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
