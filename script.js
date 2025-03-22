// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section: Arcade Boot-Up & Parallax
gsap.from(".arcade rect, .arcade circle, .arcade path", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
});
gsap.from(".arcade text", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    delay: 0.5,
});
gsap.to(".arcade text", {
    scale: 1.05,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1,
});
gsap.from(".hero-content h1", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    delay: 1,
});
gsap.from(".hero-content p", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    delay: 1.2,
});
gsap.from(".cta", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 1.4,
});

// Parallax for Hero
gsap.to(".arcade", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
    y: -100,
});
gsap.to(".glitch-bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
    y: 50,
});

// About Section: Coder Animation
gsap.from(".coder", {
    opacity: 0,
    y: 50,
    duration: 0.5,
});
gsap.to(".coder", {
    y: -10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});
gsap.from(".speech-bubble", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 0.5,
});
gsap.from(".about-content h2, .about-content p", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.7,
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

// Process Section: 3D-Like SVG Animations
gsap.utils.toArray(".step").forEach((step) => {
    gsap.from(step.querySelector("svg"), {
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
    });

    gsap.to(step.querySelector("svg"), {
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
        },
        rotationY: 360,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.5,
    });

    gsap.from(step.querySelector("p"), {
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.3,
    });

    if (step.querySelector(".coffee-cup")) {
        gsap.to(step.querySelectorAll(".steam"), {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: -20,
            opacity: 0,
            duration: 1,
            repeat: -1,
            stagger: 0.2,
            ease: "sine.inOut",
        });
    }

    if (step.querySelector(".pencil")) {
        gsap.to(step.querySelector(".line"), {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            strokeDashoffset: 0,
            duration: 1,
            repeat: -1,
            ease: "power2.inOut",
        });
    }

    if (step.querySelector(".laptop")) {
        gsap.from(step.querySelector(".screen"), {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            rotationX: 90,
            duration: 0.7,
            ease: "power2.out",
        });
        gsap.to(step.querySelectorAll(".code-symbol"), {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: -20,
            opacity: 0,
            duration: 1,
            repeat: -1,
            stagger: 0.3,
            ease: "sine.inOut",
        });
    }

    if (step.querySelector(".controller")) {
        gsap.to(step.querySelector("svg"), {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            x: 5,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        gsap.to(step.querySelectorAll(".particle"), {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: -15,
            x: (i) => (i === 0 ? -10 : 10),
            opacity: 0,
            duration: 0.8,
            repeat: -1,
            stagger: 0.2,
            ease: "sine.inOut",
        });
    }
});

// CTA Section: Power-Up Effect & Parallax
gsap.to(".portal", {
    rotation: 360,
    duration: 5,
    repeat: -1,
    ease: "none",
});
gsap.from(".cta-content h2", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: "back.out(1.7)",
});
gsap.from(".cta-content p", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    delay: 0.2,
});
gsap.from(".final-cta", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 0.4,
});

// Parallax for CTA
gsap.to(".portal", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
    y: 100,
});
gsap.to(".glitch-bg", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
    y: -50,
});