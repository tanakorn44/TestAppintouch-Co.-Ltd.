// script.js
document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('menu-image');

    const images = [
        '../../assets/menu2.jpg',
        '../../assets/menu3.jpg' ,
    ];

    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, 3000); 
});
