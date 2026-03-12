const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initMobileNavigation() {
  const mobileMenuQuery = window.matchMedia("(max-width: 820px)");
  const headers = document.querySelectorAll(".site-header__inner");

  headers.forEach((header, index) => {
    const toggle = header.querySelector(".site-nav-toggle");
    const nav = header.querySelector(".site-nav");

    if (!toggle || !nav) {
      return;
    }

    if (!nav.id) {
      nav.id = `site-nav-${index + 1}`;
      toggle.setAttribute("aria-controls", nav.id);
    }

    const closeMenu = () => {
      header.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    };

    const syncMenuState = () => {
      closeMenu();
    };

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (header.classList.contains("is-menu-open")) {
        closeMenu();
        return;
      }

      header.classList.add("is-menu-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileMenuQuery.matches) {
          closeMenu();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!mobileMenuQuery.matches || header.contains(event.target)) {
        return;
      }

      closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    if (typeof mobileMenuQuery.addEventListener === "function") {
      mobileMenuQuery.addEventListener("change", syncMenuState);
    } else if (typeof mobileMenuQuery.addListener === "function") {
      mobileMenuQuery.addListener(syncMenuState);
    }

    syncMenuState();
  });
}

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
initMobileNavigation();
revealElements();

if (typeof prefersReducedMotion.addEventListener === "function") {
  prefersReducedMotion.addEventListener("change", syncMotionPreference);
}
