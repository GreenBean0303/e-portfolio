// Start fade-in immediately, even before DOM is fully loaded
document.body.classList.add('fade-in');

// Also ensure it runs when DOM is ready
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