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
  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
    if (!isOpen) document.body.classList.remove("is-nav-hidden");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

const siteHeader = document.querySelector(".site-header");
const mobileNavQuery = window.matchMedia("(max-width: 768px)");

if (siteHeader) {
  let lastScrollY = window.scrollY;
  let ticking = false;
  const scrollDelta = 10;
  const topSafeArea = 64;

  const isMobileNav = () => mobileNavQuery.matches;
  const isMobileMenuOpen = () => document.body.classList.contains("menu-open");

  const revealNav = () => document.body.classList.remove("is-nav-hidden");
  const hideNav = () => document.body.classList.add("is-nav-hidden");

  const updateNavOnScroll = () => {
    const currentScrollY = Math.max(window.scrollY, 0);
    const scrollDifference = currentScrollY - lastScrollY;

    if (!isMobileNav() || isMobileMenuOpen() || currentScrollY <= topSafeArea) {
      revealNav();
      lastScrollY = currentScrollY;
      ticking = false;
      return;
    }

    if (Math.abs(scrollDifference) >= scrollDelta) {
      if (scrollDifference > 0) {
        hideNav();
      } else {
        revealNav();
      }
      lastScrollY = currentScrollY;
    }

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateNavOnScroll);
  }, { passive: true });

  const handleMobileNavChange = () => {
    revealNav();
    lastScrollY = Math.max(window.scrollY, 0);
  };

  if (typeof mobileNavQuery.addEventListener === "function") {
    mobileNavQuery.addEventListener("change", handleMobileNavChange);
  } else if (typeof mobileNavQuery.addListener === "function") {
    mobileNavQuery.addListener(handleMobileNavChange);
  }
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.getElementById(targetId.slice(1));
    if (!target) return;

    event.preventDefault();
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      if (window.location.hash !== targetId) history.replaceState(null, "", targetId);
    });
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

const normalizePagePath = (value) => {
  const url = new URL(value || "/", window.location.origin);
  let pathname = url.pathname
    .replace(/\/index\.html$/i, "/")
    .replace(/\.html$/i, "/")
    .replace(/\/+/g, "/");

  if (pathname !== "/") pathname = pathname.replace(/\/$/, "") + "/";
  return pathname || "/";
};

const currentPage = normalizePagePath(window.location.pathname);
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;

  const linkPage = normalizePagePath(href);
  const isActive = linkPage === currentPage;
  link.classList.toggle("is-active", isActive);
  if (isActive) link.setAttribute("aria-current", "page");
});

const revealElements = document.querySelectorAll(".reveal");
const canAnimateReveal = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window;

if (canAnimateReveal) {
  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
