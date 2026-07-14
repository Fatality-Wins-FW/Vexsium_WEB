// Dropdown Toggle
const dropdown = document.querySelector('.dropdown');
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Prevent dropdown from closing when clicking inside it
document.querySelector('.dropdown-menu').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Add click handler to disabled download items
document.querySelectorAll('.dropdown-item.disabled').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // You can add a toast notification here if desired
        console.log('Downloads coming soon!');
    });
});

// Add click handler to disabled social icons
document.querySelectorAll('.social-icon.disabled').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        // You can add a toast notification here if desired
        console.log('Coming soon!');
    });
});

console.log('Vyrix.win - Welcome!');