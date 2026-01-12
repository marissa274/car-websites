function init() {

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

 
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }


  const modalClose = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");
  if (modalClose && modalOverlay) {
    modalClose.addEventListener("click", () => modalOverlay.classList.add("hidden"));
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.add("hidden");
    });
  }


  if (typeof renderFeatured === "function") renderFeatured(cars);

  
  if (typeof initFilters === "function") initFilters();
  if (typeof applyFilters === "function") applyFilters();
}
