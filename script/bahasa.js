// ============ Slider Halaman Utama (otomatis) ============
const mainSlidesContainer = document.getElementById('slides');
if (mainSlidesContainer) {
  const mainSlides = Array.from(mainSlidesContainer.children);

  mainSlides.forEach((slide) => {
    mainSlidesContainer.appendChild(slide.cloneNode(true));
  });

  let position = 0;
  const speed = 0.3;

  function animateMain() {
    position -= speed;
    mainSlidesContainer.style.transform = `translateX(${position}px)`;

    const firstSlide = mainSlidesContainer.children[0];
    const firstWidth = firstSlide.offsetWidth + 20;

    if (Math.abs(position) >= firstWidth) {
      mainSlidesContainer.appendChild(firstSlide);
      position += firstWidth;
    }
    requestAnimationFrame(animateMain);
  }

  animateMain();
}
