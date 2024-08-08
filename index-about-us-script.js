// JavaScript to update the copyright year automatically
document.addEventListener("DOMContentLoaded", function() {
    const copyrightElement = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `Copyright © ${currentYear} Fiesta on Wheels. All rights reserved.`;
});
