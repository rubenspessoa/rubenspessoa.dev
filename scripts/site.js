const revealElements = document.querySelectorAll("[data-reveal]");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
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
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

const newsletterForm = document.querySelector("[data-newsletter-form]");
const newsletterFeedback = document.querySelector("[data-newsletter-feedback]");

if (newsletterForm instanceof HTMLFormElement && newsletterFeedback) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(newsletterForm);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      newsletterFeedback.textContent = "Add an email address and I'll open a draft so you can join the list.";
      return;
    }

    const subject = encodeURIComponent("Newsletter signup - Notes from a Builder");
    const body = encodeURIComponent(
      `Hi Rubens,\n\nPlease add ${email} to Notes from a Builder.\n\nThanks.`
    );

    newsletterFeedback.textContent =
      "Opening a quick email draft so I can add you manually until the full signup flow is live.";

    window.location.href = `mailto:contact@rubenspessoa.dev?subject=${subject}&body=${body}`;
    newsletterForm.reset();
  });
}
