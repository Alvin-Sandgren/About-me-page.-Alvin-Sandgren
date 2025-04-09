function showDate() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAlert(message) {
    alert(message);
}


document.addEventListener('DOMContentLoaded', () => {
    showDate(); 
});

document.getElementById('darkModeButton')?.addEventListener('click', toggleDarkMode);
document.getElementById('scrollTopButton')?.addEventListener('click', scrollToTop);
document.getElementById('alertButton')?.addEventListener('click', () => showAlert('Hej och välkommen!'));