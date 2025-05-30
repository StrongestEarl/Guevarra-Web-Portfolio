const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.getAttribute("data-title");
    modalImage.src = card.getAttribute("data-img");
    modalDescription.innerHTML = card.getAttribute("data-description");
    modal.classList.remove("hidden");
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
