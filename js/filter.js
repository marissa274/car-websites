function fillBrandOptions(list){
  const brandSelect = document.getElementById("brand");
  if(!brandSelect) return;

  const brands = Array.from(new Set(list.map(c => c.brand))).sort();

  brandSelect.innerHTML =
    `<option value="all">All brands</option>` +
    brands.map(b => `<option value="${b}">${b}</option>`).join("");
}

function sortCars(list){
  
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}

function applyFilters(){
  const searchEl = document.getElementById("search");
  const brandEl = document.getElementById("brand");
  const maxPriceEl = document.getElementById("maxPrice");
  const countEl = document.getElementById("resultsCount");

  if(!searchEl || !brandEl || !maxPriceEl) return;

  const query = (searchEl.value || "").trim().toLowerCase();
  const brand = brandEl.value || "all";
  const maxPrice = Number(maxPriceEl.value || 0);

  let filtered = cars.filter(car => {
    const matchQuery =
      !query ||
      car.name.toLowerCase().includes(query) ||
      car.brand.toLowerCase().includes(query);

    const matchBrand = (brand === "all") ? true : car.brand === brand;
    const matchPrice = maxPrice ? car.price <= maxPrice : true;

    return matchQuery && matchBrand && matchPrice;
  });

  filtered = sortCars(filtered);

  if(countEl) countEl.textContent = String(filtered.length);

  
  renderCars(filtered);
}

function initFilters(){
  const searchEl = document.getElementById("search");
  const brandEl = document.getElementById("brand");
  const maxPriceEl = document.getElementById("maxPrice");
  const resetBtn = document.getElementById("resetBtn");

  if(!searchEl || !brandEl || !maxPriceEl || !resetBtn) return;

  
  fillBrandOptions(cars);

  
  searchEl.addEventListener("input", applyFilters);
  brandEl.addEventListener("change", applyFilters);
  maxPriceEl.addEventListener("input", applyFilters);

  
  resetBtn.addEventListener("click", () => {
    searchEl.value = "";
    brandEl.value = "all";
    maxPriceEl.value = "";
    applyFilters();
  });
}
