document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تفعيل القائمة في الموبايل
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. الوضع الليلي (Dark Mode) مع الحفظ
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    // تطبيق الثيم المحفوظ لو موجود
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // 3. أنيميشن الاسكرول (Intersection Observer)
    // الكود ده بيخلي العناصر تظهر وتختفي كل ما تعمل سكرول
    const observerOptions = {
        threshold: 0.1 // يبدأ الأنيميشن لما يظهر 10% من العنصر
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // السطر ده هو اللي بيعيد الأنيميشن لما تطلع فوق تاني
                entry.target.classList.remove('visible'); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
});