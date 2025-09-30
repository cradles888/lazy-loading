const containerBlocks = document.getElementById("blocks");
const oneSection = document.getElementById("oneSection");
const twoSection = document.getElementById("twoSection");
const threeSection = document.getElementById("threeSection");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("header").style.display = "block";
    document.querySelector("main").style.display = "block";
    document.querySelector("footer").style.display = "block";
    document.querySelector(".preloader").style.display = "none";
  }, 3000);
});

let isLoaded = false;
window.onscroll = function () {
    scrollFunctionOne();
    scrollFunctionTwo();
};

function scrollFunctionOne() {
  if (
    document.documentElement.scrollTop > 13300
  ) {
    if (!isLoaded) {
      console.log("loaded", document.documentElement.scrollTop);
      twoSection.style.display = "block";
    }
  } else {
    console.log("no loaded", document.documentElement.scrollTop);
  }
}

function scrollFunctionTwo() {
  if (
    document.documentElement.scrollTop > 24800
  ) {
    if (!isLoaded) {
      console.log("loaded", document.documentElement.scrollTop);
      threeSection.style.display = "block";
    }
  } 
}

// Как оптимизировать подгрузку для мобилок
// Как правильно организовать динамичный scrollTop