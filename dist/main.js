(() => {
  // src/js/main.js
  document.addEventListener("DOMContentLoaded", () => {
    const animatedBlocks = document.querySelectorAll(".animated");
    const observer = new IntersectionObserver((entries, observer2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
          observer2.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
      // 0.2 = 20% блока должно быть видно, чтобы сработало
    });
    animatedBlocks.forEach((block) => observer.observe(block));
  });
  document.addEventListener("DOMContentLoaded", () => {
    const faqLinks = document.querySelectorAll(".faq-block__question");
    faqLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const blockToToggle = link.closest(".faq-block__item");
        if (blockToToggle.classList.contains("opened")) {
          blockToToggle.classList.remove("opened");
          return;
        }
        document.querySelectorAll(".faq-block__item").forEach((block) => {
          block.classList.remove("opened");
        });
        blockToToggle.classList.add("opened");
      });
    });
  });
  var swiper = new Swiper(".reviews__swiper", {
    spaceBetween: 32,
    slidesPerView: "auto",
    grabCursor: true,
    grid: {
      rows: 2,
      fill: "row"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      768: {
        slidesPerView: "auto",
        grid: {
          rows: 2
        },
        pagination: false
      }
    }
  });
  var linkOpen = document.querySelector(".header__nav-link--open");
  var linkClose = document.querySelector(".header__nav-link--close");
  var headert = document.querySelector(".header");
  linkOpen.addEventListener("click", (e) => {
    e.preventDefault();
    headert.classList.add("nav-opened");
    linkOpen.style.display = "none";
    linkClose.style.display = "flex";
  });
  linkClose.addEventListener("click", (e) => {
    e.preventDefault();
    headert.classList.remove("nav-opened");
    linkOpen.style.display = "flex";
    linkClose.style.display = "none";
  });
})();
