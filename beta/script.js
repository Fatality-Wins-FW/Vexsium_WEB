function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}

async function updateMemberCount() {
    const countElement = document.getElementById('member-count');
    try {
        const response = await fetch('https://discord.com/api/guilds/1520162857159753868/widget.json');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        const memberCount = data.members ? data.members.length : 0;
        
        countElement.textContent = formatNumber(memberCount) + '+';
    } catch (error) {
        console.error('Error fetching member count:', error);
        countElement.textContent = '1K+';
    }
}

const dropdown = document.querySelector('.dropdown');
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

const dropdownMenu = document.querySelector('.dropdown-menu');
if (dropdownMenu) {
    dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

updateMemberCount();