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
