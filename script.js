const clinicConfig = {
  phone: "6281234567890",
  message: "halo admin senyum dental care, saya ingin booking konsultasi/perawatan gigi. boleh dibantu info jadwal yang tersedia?"
};

const whatsappUrl = `https://wa.me/${clinicConfig.phone}?text=${encodeURIComponent(clinicConfig.message)}`;

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", targetId);
  });
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector("button");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) return;

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    faqItems.forEach((otherItem) => {
      const otherButton = otherItem.querySelector("button");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      otherItem.classList.remove("is-open");
      if (otherButton) otherButton.setAttribute("aria-expanded", "false");
      if (otherAnswer) otherAnswer.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;
  const linkPage = href.split("#")[0];
  const isActive = linkPage === currentPage || (currentPage === "" && linkPage === "index.html");
  link.classList.toggle("is-active", isActive);
  if (isActive) link.setAttribute("aria-current", "page");
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => revealObserver.observe(element));
