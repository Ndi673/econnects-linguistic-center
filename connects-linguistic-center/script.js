// Mobile navigation

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

// Close navigation after clicking a link

document.querySelectorAll("#navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// Automatic copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form - sends enquiry through WhatsApp

document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const course = document.getElementById("course").value;
        const message = document.getElementById("message").value;

        const text =
            `Hello CONNECTS Linguistic Center!

Name: ${name}
Phone: ${phone}
Course: ${course}
Message: ${message}`;

        const whatsappURL =
            "https://wa.me/237678460972?text=" +
            encodeURIComponent(text);

        window.open(whatsappURL, "_blank");
    }
);

// ===== EXPERIENCE SECTION SCROLL ANIMATION =====

const animatedElements = document.querySelectorAll(
    ".profile-image, .profile-content, .experience-grid > div"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    revealObserver.observe(element);
});