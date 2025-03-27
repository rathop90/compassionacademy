document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("fade-in");
            }
        });
    }
    
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
    
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent!");
        this.reset();
    });
});
