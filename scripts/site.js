const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initMobileNavigation() {
  const mobileMenuQuery = window.matchMedia("(max-width: 820px)");
  const headers = document.querySelectorAll(".site-header__inner");
  const menus = [];

  const setMenuState = (menu, isOpen) => {
    const { header, toggle, nav } = menu;
    const isMobileMenu = mobileMenuQuery.matches;
    const shouldHideNav = isMobileMenu && !isOpen;

    header.classList.toggle("is-menu-open", isMobileMenu && isOpen);
    toggle.setAttribute("aria-expanded", isMobileMenu && isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isMobileMenu && isOpen ? "Close navigation menu" : "Open navigation menu");

    if (shouldHideNav) {
      nav.setAttribute("aria-hidden", "true");
    } else {
      nav.removeAttribute("aria-hidden");
    }

    if ("inert" in nav) {
      nav.inert = shouldHideNav;
    }
  };

  const closeMenu = (menu) => {
    setMenuState(menu, false);
  };

  const openMenu = (menu) => {
    menus.forEach((candidate) => {
      if (candidate !== menu) {
        closeMenu(candidate);
      }
    });

    setMenuState(menu, true);
  };

  const findOpenMenu = () => menus.find((menu) => menu.header.classList.contains("is-menu-open"));

  const syncMenuState = () => {
    menus.forEach((menu) => {
      closeMenu(menu);
    });
  };

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

    const menu = { header, toggle, nav };
    menus.push(menu);

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();

      if (!mobileMenuQuery.matches) {
        return;
      }

      if (header.classList.contains("is-menu-open")) {
        closeMenu(menu);
        return;
      }

      openMenu(menu);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileMenuQuery.matches) {
          closeMenu(menu);
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenuQuery.matches) {
      return;
    }

    const openMenuInstance = findOpenMenu();

    if (!openMenuInstance || openMenuInstance.header.contains(event.target)) {
      return;
    }

    closeMenu(openMenuInstance);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !mobileMenuQuery.matches) {
      return;
    }

    const openMenuInstance = findOpenMenu();

    if (!openMenuInstance) {
      return;
    }

    closeMenu(openMenuInstance);
    openMenuInstance.toggle.focus();
  });

  if (typeof mobileMenuQuery.addEventListener === "function") {
    mobileMenuQuery.addEventListener("change", syncMenuState);
  } else if (typeof mobileMenuQuery.addListener === "function") {
    mobileMenuQuery.addListener(syncMenuState);
  }

  syncMenuState();
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
