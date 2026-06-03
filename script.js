// ==================== THEME TOGGLE ====================
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ Light Mode';
    }
});

// ==================== LOAD NAVIGATION & FOOTER ====================
function loadNavigation() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            const navContainer = document.getElementById('main-navigation');
            if (navContainer) navContainer.innerHTML = data;
        })
        .catch(error => console.error('Failed to load nav:', error));
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById('main-footer');
            if (footerContainer) footerContainer.innerHTML = data;
        })
        .catch(error => console.error('Failed to load footer:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    loadFooter();
});