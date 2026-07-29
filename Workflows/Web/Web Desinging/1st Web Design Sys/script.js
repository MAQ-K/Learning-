const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navToggle.setAttribute('aria-expanded', !isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.add('hidden');
        navLinks.classList.remove('flex');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const data = document.getElementById('products-data');
    if (!grid || !data) return;

    const products = JSON.parse(data.textContent);

    grid.innerHTML = products.map(product => `
        <article class="group flex flex-col bg-white text-black border border-border opacity-0 translate-y-6 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0" data-reveal>
            <div class="tilt-card transition-transform duration-150 ease-out motion-reduce:transition-none">
                <div class="relative aspect-square bg-background-warm overflow-hidden border-b border-border">
                    <span class="absolute top-3 left-3 z-10 font-mono text-[10px] uppercase tracking-widest text-muted">${product.tag}</span>
                    <img src="${product.image}" alt="${product.imageAlt}" class="absolute inset-0 w-full h-full object-contain p-6 transition-[opacity,transform] duration-300 motion-reduce:transition-none group-hover:opacity-0 group-hover:scale-105">
                    <img src="${product.imageHover}" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-contain p-6 opacity-0 transition-[opacity,transform] duration-300 motion-reduce:transition-none group-hover:opacity-100 group-hover:scale-105">
                </div>
                <div class="flex flex-col p-8 md:p-10">
                    <h3 class="font-display text-2xl tracking-wide mb-2">${product.title}</h3>
                    <p class="font-body text-sm text-black/60 mb-8">${product.description}</p>
                    <div class="mt-auto flex items-center justify-between gap-4">
                        <span class="inline-flex items-center gap-2 font-mono text-sm tracking-widest">
                            <span class="w-2.5 h-2.5 rounded-full border border-border" style="background:${product.swatch}" aria-hidden="true"></span>
                            $${product.price}
                        </span>
                        <button type="button" class="add-to-cart min-h-11 px-6 bg-accent text-white font-mono text-xs uppercase tracking-widest hover:bg-black hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:scale-100 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-accent" data-product-id="${product.id}">[ Add to Cart ]</button>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    initTilt();
}

renderProducts();

document.getElementById('productGrid').addEventListener('click', event => {
    const button = event.target.closest('.add-to-cart');
    if (!button) return;

    const originalText = button.dataset.originalText || button.textContent;
    button.dataset.originalText = originalText;
    button.textContent = 'Added ✓';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
});

const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', event => {
    event.preventDefault();

    const button = newsletterForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = 'Subscribed ✓';
    button.disabled = true;
    newsletterForm.reset();

    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
});

// Scroll-reveal: fades/slides elements in once as they enter the viewport.
function initReveal() {
    const targets = document.querySelectorAll('[data-reveal]:not([data-reveal-bound])');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        targets.forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-6');
            el.classList.add('opacity-100', 'translate-y-0');
        });
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-6');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => {
        el.setAttribute('data-reveal-bound', 'true');
        observer.observe(el);
    });
}

initReveal();

// 3D mouse-tilt hover on product cards.
function initTilt() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.tilt-card:not([data-tilt-bound])').forEach(card => {
        card.setAttribute('data-tilt-bound', 'true');

        card.addEventListener('mousemove', event => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${py * -8}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
        });
    });
}

// Animated FAQ accordion (CSS grid-rows transition driven by aria-expanded state).
document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isOpen));

        const panel = document.getElementById(trigger.getAttribute('aria-controls'));
        panel.classList.toggle('grid-rows-[1fr]', !isOpen);
        panel.classList.toggle('grid-rows-[0fr]', isOpen);
        trigger.querySelector('.faq-icon').classList.toggle('rotate-45', !isOpen);
    });
});
