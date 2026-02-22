// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

// Navbar scroll style
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
    });

    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
}, { passive: true });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let idx = 0;
        siblings.forEach((el, j) => {
            if (el === entry.target) idx = j;
        });

        setTimeout(() => {
            entry.target.classList.add('visible');
        }, idx * 70);

        io.unobserve(entry.target);
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => io.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Contact form
const form = document.querySelector('.contact-form');
if (form) {
    const status = form.querySelector('.form-status');
    const btn = form.querySelector('button');
    const originalLabel = btn ? btn.innerHTML : '';

    const setStatus = (message, type = '') => {
        if (!status) return;
        status.textContent = message;
        status.classList.remove('success', 'error');
        if (type) status.classList.add(type);
    };

    form.addEventListener('submit', async e => {
        e.preventDefault();
        setStatus('');

        if (btn) {
            btn.innerHTML = 'Sending...';
            btn.disabled = true;
        }

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            if (!res.ok) throw new Error();
            form.reset();
            setStatus('Message sent. I will get back to you soon.', 'success');
        } catch {
            setStatus('Something went wrong. Please email me directly.', 'error');
        } finally {
            if (btn) {
                btn.innerHTML = originalLabel;
                btn.disabled = false;
            }
        }
    });
}
