window.toggleMenu = function() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
    
    // Ensuring smooth transition by toggling translate-x-full
    if (!menu.classList.contains('hidden')) {
        menu.classList.remove('translate-x-full');
    } else {
        menu.classList.add('translate-x-full');
    }
};
