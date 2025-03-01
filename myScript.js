document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.innerText = "☀️";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.innerText = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.innerText = "🌙";
        }
    });
});
