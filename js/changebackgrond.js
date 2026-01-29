const images = [
    // Source of rotating images
    '../img/cover/cover1.jpg',
    '../img/cover/cover2.jpg',
    '../img/cover/cover3.jpg',
    '../img/cover/cover4.jpg'
];

let currentIndex = 0;
const backgroundContainer = document.getElementById('background-container');

function changeBackground() {
    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();

// change image each 5 second
setInterval(changeBackground, 5000);