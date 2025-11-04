document.body.classList.add('fade-in');
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    const certificateImages = document.querySelectorAll('#certificates img');
    const modalImage = document.getElementById('modalCertificateImage');
    const certificateModal = document.getElementById('certificateModal');
    
    //initialize if certificate elements exist on the page
    if (certificateImages.length > 0 && modalImage && certificateModal) {
        const modal = new bootstrap.Modal(certificateModal);
        
        certificateImages.forEach(img => {
            img.addEventListener('click', function() {
                modalImage.src = this.src;
                modalImage.alt = this.alt;
                modal.show();
            });
            img.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    modalImage.src = this.src;
                    modalImage.alt = this.alt;
                    modal.show();
                }
            });
        });
    }
});

// fade-out effect when clicking links or logo
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