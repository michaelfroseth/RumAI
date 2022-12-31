const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classNameList.toggle('menu-open');
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
    menu.classNameList.remove('menu-open');
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(link => link.classNameList.remove('active'));
        link.classNameList.add('active');
    });
});

// Select the element with the parallax background
const parallaxElement = document.querySelector('.parallax');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Calculate the scroll position of the page
    const scrollPos = window.scrollY;

    // Apply a transform to the parallax element based on the scroll position
    parallaxElement.style.transform = `translateY(${scrollPos * 0.5}px)`;
});
