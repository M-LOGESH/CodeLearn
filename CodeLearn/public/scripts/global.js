const menu = document.getElementById("mobileMenu");
const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const themeToggle = document.getElementById("themeToggle");
const iconTheme = document.getElementById("iconTheme");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const secondaryLogo = document.getElementById("secondaryLogo");

// ========== Theme Management ==========
class ThemeManager {
  constructor() {
    this.currentTheme = this.getSavedTheme();
    this.init();
  }

  getSavedTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.updateIcon();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    this.updateIcon();
  }

  updateIcon() {
    if (this.currentTheme === 'dark') {
      iconTheme.className = "fas fa-moon";
    } else {
      iconTheme.className = "fas fa-sun";
    }
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();


// ========== Event Listeners ==========
document.addEventListener("DOMContentLoaded", () => {
  // Theme is already initialized by ThemeManager
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-full");
  menuIcon.classList.toggle("rotate-90");
});

document.addEventListener("click", (e) => {
  const isMenuOpen = !menu.classList.contains("-translate-x-full");
  if (isMenuOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.add("-translate-x-full");
    menuIcon.classList.remove("rotate-90");
  }
});

themeToggle.addEventListener("click", () => {
  themeManager.toggleTheme();
});

searchBtn.addEventListener("click", () => {
  if (window.innerWidth <= 400) {
    const isActive = searchInput.classList.contains("active");
    if (isActive) {
      performSearch();
      searchInput.classList.remove("active");
      if (secondaryLogo) secondaryLogo.classList.remove("hidden");
    } else {
      searchInput.classList.add("active");
      if (secondaryLogo) secondaryLogo.classList.add("hidden");
    }
  } else {
    performSearch();
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    performSearch();
  }
});

// Close search when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 400 && searchInput.classList.contains("active")) {
    if (!searchInput.contains(e.target) && !searchBtn.contains(e.target)) {
      searchInput.classList.remove("active");
      if (secondaryLogo) secondaryLogo.classList.remove("hidden");
    }
  }
});

function performSearch() {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) return;

  const elements = document.body.querySelectorAll("*:not(script):not(style)");
  let found = false;

  elements.forEach((el) => {
    if (
      el.children.length === 0 &&
      el.textContent.toLowerCase().includes(query) &&
      !found
    ) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.setProperty('background-color', 'var(--accent-color)');
      el.style.setProperty('color', 'white');
      setTimeout(() => {
        el.style.removeProperty('background-color');
        el.style.removeProperty('color');
      }, 2000);
      found = true;
    }
  });

  if (!found) alert(`No results found for: ${query}`);
  
  // Clear search input
  searchInput.value = "";
  
  // Close mobile search if active
  if (window.innerWidth <= 400 && searchInput.classList.contains("active")) {
    searchInput.classList.remove("active");
    if (secondaryLogo) secondaryLogo.classList.remove("hidden");
  }
}