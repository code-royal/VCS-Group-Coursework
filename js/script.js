const themeToggle = document.querySelector(".theme-toggle");

// Apply saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    localStorage.setItem("theme", isDark ? "dark" : "light");
});