// Particles.js configuration
/* Particles.js Configuration */
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 6, direction: "none", random: false },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
  },
  retina_detect: true,
});


// GSAP Animations
gsap.from(".hero-content h1", { duration: 1.5, y: -100, opacity: 0, delay: 0.3 });
gsap.from(".hero-content p", { duration: 1.5, y: 100, opacity: 0, delay: 0.6 });
gsap.from(".socials a", { duration: 1.5, opacity: 0, stagger: 0.3, y: 50 });

gsap.utils.toArray(".card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 85%" },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});
