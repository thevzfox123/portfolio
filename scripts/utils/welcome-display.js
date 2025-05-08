export function renderWelcomeDisplay() {
  document.addEventListener("DOMContentLoaded", () => {
  const welcomeTab = document.querySelector(".welcome__tab");

  // Show the tab
  welcomeTab.classList.add("show");

  // Hide after 2 seconds
  setTimeout(() => {
    welcomeTab.classList.remove("show");
  }, 2000);
});
}

