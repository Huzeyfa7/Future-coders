// Responsive Navbar Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Form Submission (Optional)
const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset(); // Clear the form fields
});

// Suggestion Form Submission
const suggestionForm = document.querySelector('.suggestion-form form');

suggestionForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for your suggestion! We appreciate your feedback.');
    suggestionForm.reset(); // Clear the form fields
});