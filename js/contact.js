document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init('dp83DZpbecRYXbFE2'); // Replace with your actual public key
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }

    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const form = event.target;
            const formMessage = document.getElementById('formMessage');
            const submitButton = form.querySelector('button[type="submit"]');

            // Show loading state
            formMessage.textContent = 'Sending your message...';
            formMessage.className = 'form-message sending';
            submitButton.disabled = true;

            // Send form data using EmailJS
            emailjs.sendForm('service_ahmyh2i', 'template_t1cdf2i', form)
                .then(function() {
                    // Success message
                    formMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                    formMessage.className = 'form-message success';
                    form.reset();
                    submitButton.disabled = false;
                }, function(error) {
                    // Error message
                    formMessage.textContent = 'Oops! Something went wrong. Please try again later or contact us directly.';
                    formMessage.className = 'form-message error';
                    submitButton.disabled = false;
                    console.error('EmailJS Error:', error);
                });
        });
    }
});