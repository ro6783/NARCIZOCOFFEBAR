
const modal = document.getElementById("menu-modal");
const titleEl = document.getElementById("modal-title");
const descEl = document.getElementById("modal-description");
const tabsEl = document.getElementById("category-tabs");
const resultsEl = document.getElementById("menu-results");
const searchEl = document.getElementById("menu-search");
const yearEl = document.getElementById("year");

let currentMenuKey = null;
let activeCategory = "Todas";

yearEl.textContent = new Date().getFullYear();

document.querySelectorAll("[data-menu]").forEach(btn => {
  btn.addEventListener("click", () => openMenu(btn.dataset.menu));
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMenu();
});

searchEl.addEventListener("input", renderCurrentMenu);

function openMenu(key){
  const menu = MENU_DATA[key];
  if(!menu) return;

  currentMenuKey = key;
  activeCategory = "Todas";
  searchEl.value = "";

  titleEl.textContent = menu.title;
  descEl.textContent = menu.description;

  renderTabs(menu.categories);
  renderCurrentMenu();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeMenu(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

function renderTabs(categories){
  tabsEl.innerHTML = "";
  ["Todas", ...categories.map(c => c.name)].forEach((name, index) => {
    const btn = document.createElement("button");
    btn.className = "category-tab" + (index === 0 ? " active" : "");
    btn.textContent = name;
    btn.addEventListener("click", () => {
      activeCategory = name;
      document.querySelectorAll(".category-tab").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      renderCurrentMenu();
    });
    tabsEl.appendChild(btn);
  });
}

function renderCurrentMenu(){
  const menu = MENU_DATA[currentMenuKey];
  if(!menu) return;

  const term = searchEl.value.trim().toLowerCase();
  resultsEl.innerHTML = "";

  const categories = menu.categories
    .filter(c => activeCategory === "Todas" || c.name === activeCategory)
    .map(c => ({
      ...c,
      items: c.items.filter(item => {
        const haystack = `${item.name} ${item.description || ""} ${item.price || ""}`.toLowerCase();
        return haystack.includes(term);
      })
    }))
    .filter(c => c.items.length > 0);

  if(categories.length === 0){
    resultsEl.innerHTML = `<div class="empty-state">No encontramos resultados para tu búsqueda.</div>`;
    return;
  }

  categories.forEach(category => {
    const card = document.createElement("article");
    card.className = "menu-category";
    card.innerHTML = `
      <h3>${category.name}</h3>
      ${category.items.map(item => `
        <div class="menu-item">
          <div class="menu-item-top">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
          </div>
          ${item.description ? `<p class="item-description">${item.description}</p>` : ""}
        </div>
      `).join("")}
    `;
    resultsEl.appendChild(card);
  });
}
