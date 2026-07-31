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