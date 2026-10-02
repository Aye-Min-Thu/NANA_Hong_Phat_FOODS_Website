
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
  }

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const reveal = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  reveal.forEach(el => observer.observe(el));

  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;
      products.forEach(card => {
        card.style.display = (category === "all" || card.dataset.category === category) ? "" : "none";
      });
    });
  });

  const form = document.querySelector("#contactForm");
  const notice = document.querySelector("#formNotice");
  if (form && notice) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      notice.style.display = "block";
      notice.textContent = "Cảm ơn bạn. Chúng tôi đã nhận được tin nhắn của bạn.";
      form.reset();
    });
  }
});

const zaloButton = document.getElementById("zaloButton");
const zaloOverlay = document.getElementById("zaloOverlay");
const zaloClose = document.getElementById("zaloClose");


// Open QR popup
zaloButton.addEventListener("click", () => {
  zaloOverlay.style.display = "flex";
});


// Close QR popup
zaloClose.addEventListener("click", () => {
  zaloOverlay.style.display = "none";
});


// Click outside QR box to close
zaloOverlay.addEventListener("click", (event) => {

  if (event.target === zaloOverlay) {
    zaloOverlay.style.display = "none";
  }

});