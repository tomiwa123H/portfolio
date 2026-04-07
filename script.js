// SLIDER
const slides = document.querySelectorAll(".slides img");
let index = 0;

function showSlide() {
  slides.forEach(img => img.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

if (slides.length > 0) {
  showSlide();
  setInterval(showSlide, 3000);
}

// SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});