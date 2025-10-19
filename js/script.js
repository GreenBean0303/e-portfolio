// Fade in on page load
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

// Add fade-out effect when clicking links or logo  
document.querySelectorAll('a.nav-link, .navbar-logo').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.href || this.parentElement.href;
        if (target) {
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        }
    });
});