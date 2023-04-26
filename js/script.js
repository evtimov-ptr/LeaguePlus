"use strict";

const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");
const container = document.querySelector(".champion-container");
const heroImg = document.querySelector(".hero-img");

// hero image swap

const swapImage = function () {
  let images = [
    "assets/img/main.png",
    "assets/img/second.png",
    "assets/img/third.png",
    "assets/img/fourth.png",
    "assets/img/fifth.png",
    "assets/img/sixth.png",
  ];
  let names = ["AKALI", "YASUO", "LUX", "JINX", "THRESH", "LEONA"];
  let currentIndex = 0;

  function changeImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    let img = document.getElementById("slideshow");
    img.src = images[currentIndex];
    let name = document.querySelector(".champion__name");
    name.innerHTML = names[currentIndex];
  }

  setInterval(changeImage, 7000);
};

swapImage();

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: false,
});

sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
sr.reveal(".scroll-down", { delay: 200, origin: "right" });
sr.reveal(".container", { delay: 100, origin: "top" });

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
});
