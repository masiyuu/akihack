const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pager = document.querySelectorAll('.pager span');

let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex >= pager.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = pager.length - 1;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  pager[currentSlide].classList.remove('active');
  pager[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

pager.forEach((page, index) => {
  page.addEventListener('click', () => {
    showSlide(index);
  });
});

showSlide(currentSlide);
