`use strict`;
//footer year
const yr = new Date().getFullYear();
const footerYear = document.getElementById("footerYear");
footerYear.textContent = yr;
// to open side bar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
// to close side bar
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// for hiding nav bar
const hide = document.querySelector(".hider");
const hide2 = document.querySelector(".hider2");
const hide3 = document.querySelector(".hider3");
const hide4 = document.querySelector(".hider4");
const hide5 = document.querySelector(".hider5");
let lastScrolly = window.scrollY;

window.addEventListener("scroll", () => {
  if ((lastScrolly = window.scrollY)) {
    hide.classList.add("hiding");
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "none";
    hide5.style.display = "none";
  } else {
    hide.classList.remove("hiding");
    hide2.style.display = "block";
    hide3.style.display = "block";
    hide4.style.display = "block";
    hide5.style.display = "block";
  }

  lastScrolly < window.scrollY;
});
