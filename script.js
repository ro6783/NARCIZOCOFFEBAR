const modal = document.getElementById("menu-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const categoryTabs = document.getElementById("category-tabs");
const menuContent = document.getElementById("menu-content");
const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();

document.querySelectorAll("[data-open-menu]").forEach((button) => {
  button.addEventListener("click", () => {
    openMenu(button.dataset.openMenu);
  });
});

document.querySelectorAll("[data-close-menu]").forEach((element) => {
  element.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeMenu();
  }
});

function openMenu(menuKey) {
  const menu = MENU_DATA[menuKey];

  if (!menu) return;

  modalTitle.textContent = menu.title;
  modalDescription.textContent = menu.description;

  renderTabs(menu.categories);
  renderCategories(menu.categories);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeMenu() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderTabs(categories) {
  categoryTabs.innerHTML = "";

  categories.forEach((category, index) => {
    const tab = document.createElement("button");

    tab.type = "button";
    tab.className = `category-tab ${index === 0 ? "active" : ""}`;
    tab.textContent = category.name;

    tab.addEventListener("click", () => {
      document.querySelectorAll(".category-tab").forEach((item) => {
        item.classList.remove("active");
      });

      tab.classList.add("active");

      const target = document.querySelector(
        `[data-category-index="${index}"]`
      );

      target?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    categoryTabs.appendChild(tab);
  });
}

function renderCategories(categories) {
  menuContent.innerHTML = "";

  categories.forEach((category, index) => {
    const categoryElement = document.createElement("article");

    categoryElement.className = "menu-category";
    categoryElement.dataset.categoryIndex = index;

    const itemsHtml = category.items.map((item) => `
      <div class="menu-item">
        <div class="menu-item-head">
          <span class="menu-item-name">${item.name}</span>
          <span class="menu-item-price">${item.price}</span>
        </div>

        ${
          item.description
            ? `<p class="menu-item-description">${item.description}</p>`
            : ""
        }
      </div>
    `).join("");

    categoryElement.innerHTML = `
      <h3>${category.name}</h3>
      ${itemsHtml}
    `;

    menuContent.appendChild(categoryElement);
  });
}
