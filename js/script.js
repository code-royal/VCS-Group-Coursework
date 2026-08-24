function requireLogin(actionName = "this action") {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        const go = confirm(
            `You need to be logged in to ${actionName}.\n\n` +
            `Click OK to Log In, or Cancel to Sign Up.`
        );

        if (go) {
            window.location.href = "./login.html";
        } else {
            window.location.href = "./signup.html";
        }
        return false;
    }
    return true;
}



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