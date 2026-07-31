      
      // Abertura do menu
      function toggleMenu() {
        const menu = document.getElementById("menu-nav");
        const btn = document.getElementById("btn-hamburguer");
        const overlay = document.getElementById("overlay-menu");

        menu.classList.toggle("aberto");
        btn.classList.toggle("ativo");
        overlay.classList.toggle("ativo");
      }    
    
    
    
  // Abertura da caixa do sobre


    function abrirShulker() {
        document.getElementById("shulkerModal").classList.add("ativo");
      }

      function fecharShulker() {
        document.getElementById("shulkerModal").classList.remove("ativo");
      }

      // Fechar ao clicar fora da janela da Shulker
      window.onclick = function (event) {
        const modal = document.getElementById("shulkerModal");
        if (event.target === modal) {
          fecharShulker();
        }
      };