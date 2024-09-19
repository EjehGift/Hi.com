// Function to toggle the visibility of the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Function to show the selected page and hide others
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';

    // Hide the menu after selecting a page
    toggleMenu();
}
alert ("Web is still under construction")