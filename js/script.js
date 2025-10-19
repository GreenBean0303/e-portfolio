// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    window.addEventListener('beforeunload', () => {
        document.body.classList.add('fade-out');
    });
});

// Add fade-out effect when clicking links or logo
document.querySelectorAll('a.nav-link, .navbar-logo').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent immediate navigation
        const target = this.href || this.parentElement.href; // Handle links and logo
        if (target) {
            document.body.classList.remove('fade-in'); // Remove fade-in
            document.body.classList.add('fade-out'); // Add fade-out
            setTimeout(() => {
                window.location.href = target; // Navigate to the target page
            }, 500); // Match the CSS transition duration
        }
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});
