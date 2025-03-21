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

// About Section: Parallax & SVG Animation
gsap.to(".about-bg", {
    scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    },
    y: "-15%",
    ease: "none",
});
gsap.from(".dev-scene", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1,
});
gsap.from(".asset", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    opacity: 0,
    y: -50,
    stagger: 0.3,
    duration: 1,
    delay: 0.5,
});

// Games Carousel
const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Process Section: Scroll Animations
gsap.utils.toArray(".step").forEach((step) => {
    gsap.from(step, {
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",
    });
    gsap.to(step.querySelector("svg"), {
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
        },
        rotation: 360,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
    });
});

// CTA Section: Portal Animation & Parallax
gsap.to(".cta-bg", {
    scrollTrigger: {
        trigger: ".cta-section",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    },
    y: "-20%",
    ease: "none",
});
gsap.to(".portal circle:first-child", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
    },
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.inOut",
});
gsap.from(".cta-content h2, .cta-content p, .final-cta", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
});