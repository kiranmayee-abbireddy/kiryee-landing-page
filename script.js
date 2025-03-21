// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section: SVG Morph & Parallax
gsap.to(".parallax-bg", {
    scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        start: "top top",
        end: "bottom top",
    },
    y: "-20%",
    ease: "none",
});

// Joystick Animation
gsap.from(".joystick", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
});
gsap.to(".joystick circle:first-child", {
    r: 45,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Text Fade-In
gsap.from(".hero-content h1, .hero-content p, .cta", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    delay: 0.5,
});

// Swiper Carousel
const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});