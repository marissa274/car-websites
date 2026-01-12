function renderCars(list){
  const grid = document.getElementById("carsGrid");
  if(!grid) return;

  grid.innerHTML = list.map(car => `
    <div class="card">
      <h3>${car.name}</h3>
      <p>${car.brand}</p>
      <p class="price">${money(car.price)}</p>

      <button class="smallBtn" onclick="openModal('${car.id}')">
        View
      </button>
    </div>
  `).join("");
}


function renderFeatured(list){
  const grid = document.getElementById("featuredGrid");
  if(!grid) return;

  grid.innerHTML = list.map(car => `
    <div class="card carCardImage">
      <div class="carImageWrap" style="background:${car.bg}">
        <img src="${car.image}" alt="${car.name}">
      </div>

      <h3>${car.name}</h3>
      <p>${car.brand}</p>
      <p class="price">${money(car.price)}</p>

      <button class="smallBtn" onclick="openModal('${car.id}')">View</button>
    </div>
  `).join("");
}

function openModal(id){
  const car = cars.find(c => c.id === id);
  if(!car) return;

  const modalOverlay = document.getElementById("modalOverlay");
  const title = document.getElementById("modalTitle");
  const price = document.getElementById("modalPrice");
  const desc = document.getElementById("modalDesc");

  if(!modalOverlay || !title || !price || !desc) return;

  title.textContent = car.name;
  price.textContent = money(car.price);
  desc.textContent = `${car.brand}`;

  modalOverlay.classList.remove("hidden");
}



