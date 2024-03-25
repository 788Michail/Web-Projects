document.addEventListener("DOMContentLoaded", function () {
    const heroImageText = document.querySelector('.hero-image-text');
    const heroImg = document.querySelector('.hero-img');
    let isRounded = true;

    heroImageText.addEventListener('click', function () {
        if (isRounded) {
            const defaultWidth = 850;
            const defaultHeight = 330;
            gsap.to(heroImg, {
                borderRadius: "450px",
                width: defaultWidth,
                height: defaultHeight,
                duration: 0.5
            });
            isRounded = false;
        } else {
            const finalWidth = 500;
            const finalHeight = 500;
            gsap.to(heroImg, {
                borderRadius: "0%",
                width: finalWidth,
                height: finalHeight,
                duration: 0.5
            });
            isRounded = true;
        }
    });
});


// Footer Icons

document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll('.footer .card-links img');
    const tweens = [];

    icons.forEach(icon => {
        const tween = gsap.to(icon, {
            rotation: 360,
            duration: 8, 
            repeat: -1, 
            ease: "linear"
        });
        tweens.push(tween); 
    });

// Mouse Over
    icons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', function () {
            tweens[index].pause();
        });
    });

// Mouse Leave
    icons.forEach((icon, index) => {
        icon.addEventListener('mouseleave', function () {
            tweens[index].play();
        });
    });
});
