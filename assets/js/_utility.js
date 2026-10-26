document.addEventListener('DOMContentLoaded', function() {

    // --- 1. NAVBAR & MENU MOBILE ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuToggle && navMenu) {
        const toggleIcon = mobileMenuToggle.querySelector('i');

        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-xmark');
            } else {
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            }
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            });
        });
    }

    // --- 2. CAROUSEL / SLIDER CARD ---
    const cardsContainer = document.getElementById('cardsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (cardsContainer && nextBtn && prevBtn) {
        function getScrollAmount() {
            const card = cardsContainer.querySelector('.card');
            return card ? card.offsetWidth + 20 : 300; 
        }

        nextBtn.addEventListener('click', () => {
            cardsContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            cardsContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }

    // --- 3. POSTS SLIDER ---
    const postsContainer = document.getElementById('postsContainer');
    const postPrevBtn = document.getElementById('postPrevBtn');
    const postNextBtn = document.getElementById('postNextBtn');

    if (postsContainer && postNextBtn && postPrevBtn) {
        function getPostScrollAmount() {
            const postCard = postsContainer.querySelector('.post-card');
            return postCard ? postCard.offsetWidth + 30 : 330;
        }

        postNextBtn.addEventListener('click', () => {
            postsContainer.scrollBy({ left: getPostScrollAmount(), behavior: 'smooth' });
        });

        postPrevBtn.addEventListener('click', () => {
            postsContainer.scrollBy({ left: -getPostScrollAmount(), behavior: 'smooth' });
        });
    }

    // --- 4. TIMELINE SLIDER ---
    const timelineWrapper = document.getElementById('timelineWrapper');
    const timelinePrevBtn = document.getElementById('timelinePrevBtn');
    const timelineNextBtn = document.getElementById('timelineNextBtn');

    if (timelineWrapper && timelineNextBtn && timelinePrevBtn) {
        function getTimelineScrollAmount() {
            const item = timelineWrapper.querySelector('.timeline-item');
            return item ? item.offsetWidth + 40 : 300;
        }

        timelineNextBtn.addEventListener('click', () => {
            timelineWrapper.scrollBy({ left: getTimelineScrollAmount(), behavior: 'smooth' });
        });

        timelinePrevBtn.addEventListener('click', () => {
            timelineWrapper.scrollBy({ left: -getTimelineScrollAmount(), behavior: 'smooth' });
        });
    }

    // --- 5. TEMA TESTO (LEGGI DI PIÙ) ---
    const paragrafo = document.querySelector(".tema-testo");
    const btnContinua = document.getElementById("btn-continua");

    if (paragrafo && btnContinua) {
        const testoCompleto = paragrafo.innerHTML;
        const limiteCaratteri = 700;

        if (testoCompleto.length > limiteCaratteri) {
            const testoRidotto = testoCompleto.substring(0, limiteCaratteri) + "...";
            paragrafo.innerHTML = testoRidotto;

            let eEspanso = false;

            btnContinua.addEventListener("click", () => {
                if (!eEspanso) {
                    paragrafo.innerHTML = testoCompleto;
                    btnContinua.textContent = "Mostra meno";
                    eEspanso = true;
                } else {
                    paragrafo.innerHTML = testoRidotto;
                    btnContinua.textContent = "Continua a leggere →";
                    eEspanso = false;
                }
            });
        } else {
            btnContinua.style.display = "none";
        }
    }

});