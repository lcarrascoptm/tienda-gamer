(function () {
    // Helper to create a button element
    function createButton(icon, url, title) {
        const btn = document.createElement('button');
        btn.className = 'fab';
        btn.title = title;
        btn.innerHTML = icon;
        btn.onclick = function () {
            window.open(url, '_blank');
        };
        return btn;
    }

    // Container for floating buttons (left side, vertically centered)
    const fabContainer = document.createElement('div');
    fabContainer.className = 'fab-container';

    // Instagram button
    const instagram = createButton('📸', 'https://instagram.com/tu_usuario', 'Instagram');
    // Facebook button
    const facebook = createButton('📘', 'https://facebook.com/tu_pagina', 'Facebook');
    // WhatsApp button (pre‑filled message)
    const whatsapp = createButton('💬', 'https://wa.me/1234567890?text=Hola%20Tienda%20Gamer', 'WhatsApp');

    fabContainer.appendChild(instagram);
    fabContainer.appendChild(facebook);
    fabContainer.appendChild(whatsapp);

    document.body.appendChild(fabContainer);
})();
