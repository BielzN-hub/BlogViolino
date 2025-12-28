function abrirJanela(pagina) {
    fetch(pagina)
      .then(res => res.text())
      .then(html => {
        const janela = document.createElement('div');
        janela.className = 'janela';
  
        janela.innerHTML = `
          <div class="janela-header">
            <button class="fechar" onclick="fecharJanela(this)">×</button>
          </div>
          <div class="janela-conteudo">${html}</div>
        `;
  
        document.body.appendChild(janela);
      })
      .catch(error => console.error('Erro ao abrir janela:', error));
  }
  
  function fecharJanela(botao) {
    const janela = botao.closest('.janela');
    if (janela) janela.remove();
  }
  
  window.onload = () => abrirJanela('home');
  
  function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('dark-mode', isDark ? 'on' : 'off');
  }
  
  window.onload = () => {
    if (localStorage.getItem('dark-mode') === 'on') {
      document.body.classList.add('dark');
    }
  };
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });