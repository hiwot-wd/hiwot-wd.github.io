// Smooth scrolling and toggle sections for navigation links
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(targetId);

      if (target) {
        document.querySelectorAll("section").forEach((section) => {
          if (section.id !== targetId.substring(1)) {
            section.classList.add("hidden");
          } else {
            section.classList.remove("hidden");
          }
        });

        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Add click animation to nav buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 200);
  });
});

// Highlight active section in navbar while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (!section.classList.contains("hidden")) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Make sections interactive on scroll (fade-in effect)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

// Add expand/collapse for project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
  });
});

// Add hover effects for skill items
document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    skill.classList.add("highlighted");
  });
  skill.addEventListener("mouseleave", () => {
    skill.classList.remove("highlighted");
  });
});
