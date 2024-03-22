window.addEventListener('load', function() {
    var slantedGreen = document.querySelector('.slanted-green');
    slantedGreen.classList.add('slide-in');
    var suzume = document.querySelector('.suzume');
    suzume.classList.add('slide-up');
});

document.addEventListener('DOMContentLoaded', function() {
    var suzume = document.querySelector('.suzume');
    var imageIndex = 0;
    var images = [
        "suzume_no_tojimari_png_by_aadunis_dfuvop4-fullview.png", 
        "dfusaf7-3de6a98e-259a-473a-88c6-2b0ac5bdf248.png", 
    ];

    function changeImage() {
        suzume.style.opacity = 0;
        setTimeout(function() {
            suzume.src = images[imageIndex];
            suzume.style.opacity = 1;
            imageIndex = (imageIndex + 1) % images.length;
        }, 500);
    }

    setInterval(changeImage, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    var slantedGreen = document.querySelector('.slanted-green');
    var burgerBtn = document.querySelector('.burger-btn');
    var currentColorIndex = 0;
    var colors = [
        'rgba(28, 227, 128, 0.4)',
        'rgba(28, 227, 128, 0.4)',
        'rgba(255, 255, 255, 0.4)',
        'rgba(255, 255, 255, 0.4)',
        'rgba(28, 128, 227, 0.4)',
        'rgba(28, 128, 227, 0.4)',
        'rgba(60, 237, 255, 0.4)',
        'rgba(60, 237, 255, 0.4)',
        'rgba(128, 227, 28, 0.4)',
        'rgba(128, 227, 28, 0.4)'
    ];

    function changeSlantedGreenColor() {
        currentColorIndex = (currentColorIndex + 1) % colors.length; 
        slantedGreen.style.backgroundColor = colors[currentColorIndex];
    }

    burgerBtn.addEventListener('click', function() {
        slantedGreen.classList.toggle('slide-in');
        changeSlantedGreenColor();
    });
});

