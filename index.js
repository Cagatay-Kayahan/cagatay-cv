document.addEventListener('DOMContentLoaded', function() {
    // AOS (Animate On Scroll) başlatma
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Özel imleç efekti
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'scale(0.8)';
        cursorFollower.style.transform = 'scale(0.5)';
    });

    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });

    // Smooth scroll için navigasyon
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });

        // İmleç efekti için hover durumları
        link.addEventListener('mouseenter', function() {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });

        link.addEventListener('mouseleave', function() {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    // Mobil menü toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Yetenekler bölümü için animasyon
    // Yetenekler bölümü için progress bar animasyonu
    const progressBars = document.querySelectorAll('.progress');
        
    const animateProgress = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const percentage = progress.getAttribute('data-progress');
                progress.style.width = percentage + '%';
                observer.unobserve(progress);
            }
        });
    };

    const progressObserver = new IntersectionObserver(animateProgress, {
        threshold: 0.5
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Form gönderimi
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = new FormData(this);
            
            // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
            // Örnek olarak başarılı gönderim mesajı gösteriyoruz
            alert('Mesajınız başarıyla gönderildi! (Demo)');
            
            // Formu sıfırla
            this.reset();
        });
    }

    // Arkaplan küpleri için rastgele pozisyon
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach(cube => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        
        cube.style.top = `${randomY}%`;
        cube.style.left = `${randomX}%`;
        cube.style.animationDelay = `${randomDelay}s`;
    });

    // Scroll to top butonu
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.classList.add('scroll-top-btn');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Sayfa yüklendiğinde loading ekranını kaldır
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });
});
