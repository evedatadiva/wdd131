document.addEventListener('DOMContentLoaded', function() {
    
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        const lastModified = new Date(document.lastModified);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        lastModifiedParagraph.textContent = `Last modified: ${lastModified.toLocaleDateString('en-US', options)}`;
    }

    
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('nav ul');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            menuButton.classList.toggle('close');
        });
    }
});

