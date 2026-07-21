const selector = document.getElementById("selector");
const openSelector = document.getElementById("open-menu-selector");
const scrollDown = document.getElementById("scroll-down");
const menuModal = document.getElementById("menu-modal");
const titleEl = document.getElementById("menu-title");
const descEl = document.getElementById("menu-description");
const tabsEl = document.getElementById("category-tabs");
const resultsEl = document.getElementById("menu-results");
const searchEl = document.getElementById("menu-search");
const yearEl = document.getElementById("year");

let currentMenu = null;
let activeCategory = "Todas";

yearEl.textContent = new Date().getFullYear();

openSelector.addEventListener("click", () => {
  selector.classList.add("open");
  selector.setAttribute("aria-hidden","false");
  document.body.classList.add("locked");
});

document.querySelectorAll("[data-close-selector]").forEach(el => {
  el.addEventListener("click", closeSelector);
});

document.querySelectorAll("[data-menu]").forEach(btn => {
  btn.addEventListener("click", () => {
    closeSelector();
    openMenu(btn.dataset.menu);
  });
});

document.querySelectorAll("[data-close-menu]").forEach(el => {
  el.addEventListener("click", closeMenu);
});

scrollDown.addEventListener("click", () => {
  document.getElementById("manifesto").scrollIntoView({behavior:"smooth"});
});

searchEl.addEventListener("input", renderMenu);

document.addEventListener("keydown", e => {
  if(e.key === "Escape"){
    closeSelector();
    closeMenu();
  }
});

function closeSelector(){
  selector.classList.remove("open");
  selector.setAttribute("aria-hidden","true");
  document.body.classList.remove("locked");
}

function openMenu(key){
  const menu = MENU_DATA[key];
  if(!menu) return;

  currentMenu = key;
  activeCategory = "Todas";
  searchEl.value = "";
  titleEl.textContent = menu.title;
  descEl.textContent = menu.description;

  renderTabs(menu.categories);
  renderMenu();

  menuModal.classList.add("open");
  menuModal.setAttribute("aria-hidden","false");
  document.body.classList.add("locked");
}

function closeMenu(){
  menuModal.classList.remove("open");
  menuModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("locked");
}

function renderTabs(categories){
  tabsEl.innerHTML = "";
  ["Todas", ...categories.map(c => c.name)].forEach((name,index) => {
    const button = document.createElement("button");
    button.className = "category-tab" + (index === 0 ? " active" : "");
    button.textContent = name;
    button.addEventListener("click", () => {
      activeCategory = name;
      document.querySelectorAll(".category-tab").forEach(tab => tab.classList.remove("active"));
      button.classList.add("active");
      renderMenu();
    });
    tabsEl.appendChild(button);
  });
}

function renderMenu(){
  const menu = MENU_DATA[currentMenu];
  if(!menu) return;

  const query = searchEl.value.trim().toLowerCase();
  resultsEl.innerHTML = "";

  const categories = menu.categories
    .filter(c => activeCategory === "Todas" || c.name === activeCategory)
    .map(c => ({
      ...c,
      items:c.items.filter(item => {
        const text = `${item.name} ${item.description || ""} ${item.price || ""}`.toLowerCase();
        return text.includes(query);
      })
    }))
    .filter(c => c.items.length);

  if(!categories.length){
    resultsEl.innerHTML = '<div class="empty-state">No encontramos resultados.</div>';
    return;
  }

  categories.forEach(category => {
    const article = document.createElement("article");
    article.className = "menu-category";
    article.innerHTML = `
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
    resultsEl.appendChild(article);
  });
}
