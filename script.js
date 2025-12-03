window.addEventListener("load", () => {
  // --- Slideshow automático ---
  let current = 0;
  const slides = document.querySelectorAll(".slide");

  function changeSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }
  setInterval(changeSlide, 2500);

  // --- Animaciones al hacer scroll ---
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.1 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));



  // === TIMELINE INTERACTIVA (popup fijo debajo del año) ===
  const events = document.querySelectorAll(".timeline-event");

  events.forEach(event => {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `<strong>${event.dataset.title}</strong><br>${event.dataset.text}`;
    event.appendChild(popup);

    event.addEventListener("mouseenter", () => popup.classList.add("show"));
    event.addEventListener("mouseleave", () => popup.classList.remove("show"));
  });
});


console.log("Hotspots interactivos listos");

