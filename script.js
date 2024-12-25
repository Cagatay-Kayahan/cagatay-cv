// Typing efekti
const texts = ["Full Stack Developer", "Web Developer", "Software Engineer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector(".typed-text").textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
    // Typing efektini başlat
    type();

    // AOS animasyonlarını başlat
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Smooth scroll için
    document.querySelectorAll('.hero-buttons a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            let currentPosition = window.pageYOffset;
            const targetPosition = targetElement.offsetTop;
            const distance = targetPosition - currentPosition;
            const duration = 3000; // 3 saniye
            let startTime = null;
            
            function smoothScroll(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                
                window.scrollTo(0, currentPosition + distance * easeInOutCubic(progress));
                
                if (progress < 1) {
                    requestAnimationFrame(smoothScroll);
                }
            }
            
            function easeInOutCubic(t) {
                return t < 0.5 
                    ? 4 * t * t * t 
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
            
            requestAnimationFrame(smoothScroll);
        });
    });
});