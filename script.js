// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Function to split text into characters and wrap in spans
function splitTextToSpans(element) {
    const text = element.textContent;
    element.innerHTML = text
        .split("")
        .map(char => `<span>${char}</span>`)
        .join("");
}

// Split the title and tagline into characters
const title = document.querySelector(".hero-content h1");
const tagline = document.querySelector(".hero-content p");
splitTextToSpans(title);
splitTextToSpans(tagline);

// Hero Section: Initial Animation
gsap.from(".hero-content h1 span", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.05,
});
gsap.from(".hero-content p span", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    delay: 0.7,
    stagger: 0.02,
});
gsap.from(".cta", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 0.9,
});

// Hero Section: Circle Movement
gsap.to(".circle", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "top+=100% top", // Adjusted for smaller circle size
        scrub: true,
    },
    y: "-150%", // Move the smaller circle fully out of view
});

// Per-Character Color Transition Based on Circle Position
const titleSpans = document.querySelectorAll(".hero-content h1 span");
const taglineSpans = document.querySelectorAll(".hero-content p span");
const ctaButton = document.querySelector(".cta");
const circle = document.querySelector(".circle");

ScrollTrigger.create({
    trigger: ".hero",
    start: "top top",
    end: "top+=100% top",
    scrub: true,
    onUpdate: (self) => {
        // Get the circle’s bounding box
        const circleRect = circle.getBoundingClientRect();
        const circleCenterX = circleRect.left + circleRect.width / 2;
        const circleCenterY = circleRect.top + circleRect.height / 2;
        const circleRadius = circleRect.width / 2;

        // Check each title span
        titleSpans.forEach(span => {
            const spanRect = span.getBoundingClientRect();
            const spanCenterX = spanRect.left + spanRect.width / 2;
            const spanCenterY = spanRect.top + spanRect.height / 2;

            // Calculate distance between circle center and span center
            const distance = Math.sqrt(
                Math.pow(circleCenterX - spanCenterX, 2) +
                Math.pow(circleCenterY - spanCenterY, 2)
            );

            // If the span’s center is inside the circle, change its color
            if (distance < circleRadius) {
                gsap.to(span, { color: "#3F0D12", duration: 0.3 }); // Over circle: dark color
            } else {
                gsap.to(span, { color: "#D72638", duration: 0.3 }); // Over background: bright color
            }
        });

        // Check each tagline span
        taglineSpans.forEach(span => {
            const spanRect = span.getBoundingClientRect();
            const spanCenterX = spanRect.left + spanRect.width / 2;
            const spanCenterY = spanRect.top + spanRect.height / 2;

            const distance = Math.sqrt(
                Math.pow(circleCenterX - spanCenterX, 2) +
                Math.pow(circleCenterY - spanCenterY, 2)
            );

            if (distance < circleRadius) {
                gsap.to(span, { color: "#3F0D12", duration: 0.3 });
            } else {
                gsap.to(span, { color: "#FBE4E3", duration: 0.3 });
            }
        });

        // Check the CTA button
        const ctaRect = ctaButton.getBoundingClientRect();
        const ctaCenterX = ctaRect.left + ctaRect.width / 2;
        const ctaCenterY = ctaRect.top + ctaRect.height / 2;

        const ctaDistance = Math.sqrt(
            Math.pow(circleCenterX - ctaCenterX, 2) +
            Math.pow(circleCenterY - ctaCenterY, 2)
        );

        if (ctaDistance < circleRadius) {
            gsap.to(".cta", { color: "#3F0D12", backgroundColor: "#D72638", duration: 0.3 });
        } else {
            gsap.to(".cta", { color: "#FBE4E3", backgroundColor: "#9B111E", duration: 0.3 });
        }
    },
});

// Fade Out Hero Content After Circle Moves Out
ScrollTrigger.create({
    trigger: ".circle",
    start: "top top",
    end: "top top",
    onEnter: () => gsap.to(".hero-content", { opacity: 0, duration: 0.5 }),
    onLeaveBack: () => gsap.to(".hero-content", { opacity: 1, duration: 0.5 }),
});

// About Section: Fade In After Circle Moves Out
gsap.from(".coder", {
    scrollTrigger: {
        trigger: ".circle",
        start: "top top", // Start when the circle’s top reaches the top of the viewport
        toggleActions: "play none none none",
    },
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
    scrollTrigger: {
        trigger: ".circle",
        start: "top top",
        toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 0.5,
});
gsap.from(".about-content h2, .about-content p", {
    scrollTrigger: {
        trigger: ".circle",
        start: "top top",
        toggleActions: "play none none none",
    },
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