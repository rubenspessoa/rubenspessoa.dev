const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function revealElements() {
  const elements = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 60, 240)}ms`);
    observer.observe(element);
  });
}

function syncMotionPreference() {
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add("reduced-motion");
    return;
  }

  document.documentElement.classList.remove("reduced-motion");
}

syncMotionPreference();
revealElements();

if (typeof prefersReducedMotion.addEventListener === "function") {
  prefersReducedMotion.addEventListener("change", syncMotionPreference);
}
