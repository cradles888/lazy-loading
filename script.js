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

// let isLoaded = false;
// window.onscroll = function () {
//     scrollFunctionOne();
//     scrollFunctionTwo();
// };

// function scrollFunctionOne() {
//   if (
//     document.documentElement.scrollTop > 13300
//   ) {
//     if (!isLoaded) {
//       console.log("loaded", document.documentElement.scrollTop);
//       twoSection.style.display = "block";
//     }
//   } else {
//     console.log("no loaded", document.documentElement.scrollTop);
//   }
// }

// function scrollFunctionTwo() {
//   if (
//     document.documentElement.scrollTop > 24800
//   ) {
//     if (!isLoaded) {
//       console.log("loaded", document.documentElement.scrollTop);
//       threeSection.style.display = "block";
//     }
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".lazy-block");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const block = entry.target;
        const img = block.querySelector("img");
        const h2 = block.querySelector("h2");
        const p = block.querySelector("p");

        try {
          if (!img || !img.dataset.img) throw new Error('Атрибут data-img не найден');
          if (!h2 || !h2.dataset.text) throw new Error('Атрибут data-text у заголовка не найден');
          if (!p || !p.dataset.text) throw new Error('Атрибут data-text у параграфа не найден');

          img.onerror = () => {
            console.error('Ошибка загрузки изображения:', img.dataset.img);
            img.alt = 'Изображение не загружено';
          };

          img.src = img.dataset.img;
          h2.textContent = h2.dataset.text;
          p.textContent = p.dataset.text;

          observer.unobserve(block);
        } catch (e) {
          console.error('Ошибка в lazy-загрузке блока:', e.message);
          observer.unobserve(block);
        }
        observer.unobserve(block);
      }
    });
  });

  blocks.forEach((block) => observer.observe(block));
});

// Зачем ставить подгрузку 10-15 элементов единовременно, если можно поштучно 
