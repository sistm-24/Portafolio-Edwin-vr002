function printPortfolio() {
      /* =========================================================
         FUNCIÓN PARA GUARDAR COMO PDF
         1. Muestra temporalmente todas las secciones del portafolio.
         2. Ejecuta la ventana de impresión del navegador.
         3. En la ventana de impresión debes elegir: "Guardar como PDF".

         Si no abre la ventana:
         - Abre el archivo HTML directamente en Chrome o Edge.
         - Presiona Ctrl + P.
         - Elige "Guardar como PDF".
         ========================================================= */
      document.body.classList.add('print-mode');
      setTimeout(function () {
        window.print();
      }, 150);
    }

    window.addEventListener('afterprint', function () {
      document.body.classList.remove('print-mode');
    });

    function activatePanel(panelId, button) {
      document.querySelectorAll('.panel').forEach(function(panel) { panel.classList.remove('active'); });
      document.querySelectorAll('.section-btn').forEach(function(btn) { btn.classList.remove('active'); });
      var selected = document.getElementById(panelId);
      if (selected) selected.classList.add('active');
      if (button && button.classList.contains('section-btn')) {
        button.classList.add('active');
      } else {
        var selector = '.section-btn[onclick*="' + panelId + '"]';
        var sideButton = document.querySelector(selector);
        if (sideButton) sideButton.classList.add('active');
      }
      if (window.innerWidth < 1050 && selected) {
        selected.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
