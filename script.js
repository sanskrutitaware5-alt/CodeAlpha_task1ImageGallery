const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('.card img');

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;
let visibleImages = [];

// FILTER BUTTONS
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// OPEN LIGHTBOX
images.forEach(img => {
  img.addEventListener('click', () => {
    visibleImages = Array.from(images).filter(i =>
      i.parentElement.style.display !== "none"
    );

    current = visibleImages.indexOf(img);
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// NEXT / PREV
nextBtn.onclick = () => {
  current = (current + 1) % visibleImages.length;
  lightboxImg.src = visibleImages[current].src;
};

prevBtn.onclick = () => {
  current = (current - 1 + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[current].src;
};

// CLOSE
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};
