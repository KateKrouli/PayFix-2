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
})();
