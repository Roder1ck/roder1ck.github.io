const skipLink = document.querySelector(".skip-link");
skipLink.addEventListener("focus", () => {
  skipLink.style.top = "0";
});
skipLink.addEventListener("blur", () => {
  skipLink.style.top = "-40px";
});

const colorPaletteSelector = document.getElementById("colorPalette");

// Apply the saved palette on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedPalette = localStorage.getItem("colorPalette");
  if (savedPalette) {
    document.body.className = ""; // Reset any existing classes
    document.body.classList.add(savedPalette);
    colorPaletteSelector.value = savedPalette; // Set the dropdown to the saved value
  }

  // Apply saved dark/light mode
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode) {
    document.body.classList.add(savedMode);
    const toggleButton = document.getElementById("themeToggle");
    toggleButton.textContent =
      savedMode === "dark-mode"
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
  }
});

// Save the selected palette and apply it
colorPaletteSelector.addEventListener("change", (event) => {
  const selectedPalette = event.target.value;
  document.body.className = ""; // Reset any existing classes
  document.body.classList.add(selectedPalette);
  localStorage.setItem("colorPalette", selectedPalette); // Save the selection
});

// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("themeMode", "light-mode");
    themeToggle.textContent = "Switch to Dark Mode";
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("themeMode", "dark-mode");
    themeToggle.textContent = "Switch to Light Mode";
  }
});
