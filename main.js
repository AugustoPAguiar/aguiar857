const bootLines = [
    { text: 'MULANDI.SYS BIOS v2.6.0  Copyright (C) 2026', delay: 0 },
    { text: '', delay: 200 },
    { text: 'CPU: PENTIUM IV 2.4GHz', delay: 300, cls: 'ok' },
    { text: 'MEMORY: 640K OK', delay: 500, cls: 'ok' },
    { text: 'CHECKING FILESYSTEM...', delay: 700 },
    { text: 'LOADING KERNEL MODULES... [OK]', delay: 1000, cls: 'ok' },
    { text: 'INITIALIZING NETWORK... [OK]', delay: 1200, cls: 'ok' },
    { text: 'LOADING CYBER SECURITY TERMINAL...', delay: 1500 },
    { text: 'SCANNING FOR THREATS... NONE DETECTED', delay: 1800, cls: 'ok' },
    { text: '', delay: 2000 },
    { text: 'BOOT SEQUENCE COMPLETE. WELCOME, OPERATOR.', delay: 2200, cls: 'ok' },
];

const container = document.getElementById('boot-lines');
const bootScreen = document.getElementById('boot-screen');

bootLines.forEach(({ text, delay, cls }) => {
    setTimeout(() => {
    const p = document.createElement('p');
    p.textContent = text;
    if (cls) p.className = cls;
    container.appendChild(p);
    }, delay);
});

setTimeout(() => {
    bootScreen.style.transition = 'opacity 0.5s';
    bootScreen.style.opacity = '0';
    setTimeout(() => { bootScreen.style.display = 'none'; }, 500);
}, 2800);

// Active TOC highlight on scroll
const sections = document.querySelectorAll('[id]');
const tocLinks = document.querySelectorAll('.toc-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    tocLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
});