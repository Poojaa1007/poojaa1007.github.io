document.addEventListener("DOMContentLoaded", () => {
  /* HAMBURGER MENU */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("toggle");
    });
    document.querySelectorAll(".nav-links li a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("toggle");
      });
    });
  }
  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length > 0) {
    function revealOnScroll() {
      reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          section.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }
  /* SKILLS BAR ANIMATION */
  const skillsSection = document.querySelector(".skills");
  const skillBars = document.querySelectorAll(".progress-bar");
  if (skillsSection && skillBars.length > 0) {
    function animateSkillBars() {
      const top = skillsSection.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        skillBars.forEach(bar => {
          bar.style.width = bar.dataset.percent + "%";
        });
        window.removeEventListener("scroll", animateSkillBars);
      }
    }
    window.addEventListener("scroll", animateSkillBars);
    animateSkillBars();
  }
  /* CERTIFICATE POPUP */
  const certItems = document.querySelectorAll(".certificate-item");
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certImage");
  const closeBtn = document.querySelector(".close-btn");
  if (certItems.length > 0 && modal && modalImg && closeBtn) {
    certItems.forEach(item => {
      item.addEventListener("click", () => {
        modalImg.src = item.dataset.image;
        modal.style.display = "flex";
      });
    });
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});