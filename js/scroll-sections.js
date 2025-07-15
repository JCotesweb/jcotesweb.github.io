document.addEventListener("DOMContentLoaded", () => {
  const isMobile =
    window.innerWidth <= 768 ||
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return;
  }

  const sections = Array.from(document.querySelectorAll("section"));
  let currentSectionIndex = 0;
  let isScrolling = false;
  const scrollThrottleTime = 1000;

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;

    isScrolling = true;
    currentSectionIndex = index;
    const targetSection = sections[currentSectionIndex];

    const sectionHeight = targetSection.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollPosition =
      targetSection.offsetTop - viewportHeight / 2 + sectionHeight / 2;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, scrollThrottleTime);
  }

  scrollToSection(0);

  window.addEventListener(
    "wheel",
    (event) => {
      if (isScrolling) return;

      if (event.deltaY > 0) {
        scrollToSection(currentSectionIndex + 1);
      } else if (event.deltaY < 0) {
        scrollToSection(currentSectionIndex - 1);
      }
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    if (isScrolling) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      scrollToSection(currentSectionIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      scrollToSection(currentSectionIndex - 1);
    }
  });

  window.addEventListener("resize", () => {
    scrollToSection(currentSectionIndex);
  });
});
