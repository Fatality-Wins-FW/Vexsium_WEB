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

console.log('Vyrix.win - Welcome!');