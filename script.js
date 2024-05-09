function openLanguage(language) {
    window.open(language + '.html', '_blank');
}

function changeBackgroundColor(language) {
    const sidebarLink = document.querySelector(`#sidebar ul li a[href="#"][onclick*="${language}"]`);
    if (sidebarLink) {
        sidebarLink.style.backgroundColor = '#ddd'; // Change background color on hover
    }
}

function resetBackgroundColor(language) {
    const sidebarLink = document.querySelector(`#sidebar ul li a[href="#"][onclick*="${language}"]`);
    if (sidebarLink) {
        sidebarLink.style.backgroundColor = ''; // Reset background color
    }
}