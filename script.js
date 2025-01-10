document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".sidebar a");  // Get all the menu items

    // Get the current page from the URL
    const currentPage = window.location.pathname.split('/').pop(); // Get the current file name (e.g. "index.html")

    // Loop through each menu item
    menuItems.forEach(item => {
        const link = item.getAttribute("href"); // Get the link (e.g. "index.html")

        // If the current page matches the link's href, add the 'active' class
        if (currentPage === link) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
});
