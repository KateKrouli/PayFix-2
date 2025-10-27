document.addEventListener("DOMContentLoaded", () => {
  const animatedBlocks = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("shown");
        observer.unobserve(entry.target); // если нужно, чтобы анимация была только один раз
      }
    });
  }, {
    threshold: 0.2 // 0.2 = 20% блока должно быть видно, чтобы сработало
  });

  animatedBlocks.forEach(block => observer.observe(block));
});


document.addEventListener("DOMContentLoaded", () => {
  const faqLinks = document.querySelectorAll(".faq-block__question");

  faqLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const blockToToggle = link.closest(".faq-block__item");

      // если кликнули по уже открытому блоку — закрываем его
      if (blockToToggle.classList.contains("opened")) {
        blockToToggle.classList.remove("opened");
        return; // дальше не идём
      }

      // иначе — закрываем все остальные и открываем нужный
      document.querySelectorAll(".faq-block__item").forEach(block => {
        block.classList.remove("opened");
      });

      blockToToggle.classList.add("opened");
    });
  });
});



const swiper = new Swiper('.reviews__swiper', {
  spaceBetween: 32,
  slidesPerView: 'auto',
  grabCursor: true,
  grid: {
    rows: 2,
    fill: 'row',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    768: {
      slidesPerView: 'auto',
      grid: {
        rows: 2,
      },
      pagination: false, 
    },
  },
});

const linkOpen = document.querySelector('.header__nav-link--open');
const linkClose = document.querySelector('.header__nav-link--close');
const headert = document.querySelector('.header');

linkOpen.addEventListener('click', (e) => {
  e.preventDefault();
  headert.classList.add('nav-opened');
  linkOpen.style.display = 'none';
  linkClose.style.display = 'flex';
});

linkClose.addEventListener('click', (e) => {
  e.preventDefault();
  headert.classList.remove('nav-opened'); 
  linkOpen.style.display = 'flex';
  linkClose.style.display = 'none';
  });