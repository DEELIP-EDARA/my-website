// Add a greeting when the user clicks the button
function greetUser() {
    alert('Hello! Welcome to my website.');
}

// Change the text color of the heading on mouse hover
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('header h1');
    heading.addEventListener('mouseover', () => {
        heading.style.color = '#ff6600';
    });
    heading.addEventListener('mouseout', () => {
        heading.style.color = '#ffffff';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === '' || email === '') {
            alert('Please fill out all fields!');
        } else {
            alert(`Thank you, ${name}! We’ll contact you at ${email}.`);
        }
    });
});
