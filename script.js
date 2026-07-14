// Download button click handler
document.getElementById('downloadBtn').addEventListener('click', () => {
    // Add your download logic here
    console.log('Download clicked - coming soon!');
});

// Add hover effect to social buttons
document.querySelectorAll('.social-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

console.log('Vyrix.win loaded successfully!');