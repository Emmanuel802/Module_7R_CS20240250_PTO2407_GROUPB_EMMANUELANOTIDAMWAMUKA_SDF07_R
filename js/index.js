// Select the element with the class 'nav-toggle' (the hamburger menu button)
const navToggle = document.querySelector('.nav-toggle');

// Select all elements with the class 'nav__link' (the navigation links)
const navLinks = document.querySelectorAll('.nav__link');

// Add a click event listener to the navToggle (hamburger menu button)
navToggle.addEventListener('click', () => {
    // Toggle the 'nav-open' class on the body element when the button is clicked
    document.body.classList.toggle('nav-open');
});

// Loop through each navigation link
navLinks.forEach(link => {
    // Add a click event listener to each link
    link.addEventListener('click', () => {
        // Remove the 'nav-open' class from the body element when a link is clicked
        document.body.classList.remove('nav-open');
    });
});



