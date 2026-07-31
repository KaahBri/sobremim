     function toggleMenu() {
        const menu = document.getElementById("menu-nav");
        const btn = document.getElementById("btn-hamburguer");
        const overlay = document.getElementById("overlay-menu");

        menu.classList.toggle("aberto");
        btn.classList.toggle("ativo");
        overlay.classList.toggle("ativo");
      }