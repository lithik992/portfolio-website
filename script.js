// ===============================
// Portfolio JavaScript
// ===============================

// Show an alert when the page loads
window.onload = function () {
    console.log("Portfolio Loaded Successfully!");
};

// Highlight the active navigation link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});