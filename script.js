(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav-principal');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    }));
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const dialog = document.querySelector('#lightbox');
  const dialogImage = document.querySelector('#lightbox-image');
  document.querySelectorAll('.image-open').forEach(button => {
    button.addEventListener('click', () => {
      const img = button.querySelector('img');
      dialogImage.src = button.dataset.full;
      dialogImage.alt = img ? img.alt : 'Fotografia ampliada';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  const closeLightbox = document.querySelector('.lightbox-close');
  if (closeLightbox) closeLightbox.addEventListener('click', () => dialog.close());
  if (dialog) dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  const form = document.querySelector('#quote-form');
  const feedback = document.querySelector('#form-feedback');
  const copyButton = document.querySelector('#copy-message');
  let preparedMessage = '';
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const details = String(data.get('detalhes') || '').trim();
      preparedMessage = [
        'Olá! Gostaria de solicitar um orçamento para a 123 Mil Transportes.',
        '',
        `Nome: ${data.get('nome')}`,
        `Telefone: ${data.get('telefone')}`,
        `Serviço: ${data.get('servico')}`,
        `Origem: ${data.get('origem')}`,
        `Destino: ${data.get('destino')}`,
        details ? `Detalhes da carga: ${details}` : ''
      ].filter(Boolean).join('\n');
      const whatsappUrl = `https://wa.me/5511994797777?text=${encodeURIComponent(preparedMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      feedback.textContent = 'Solicitação preparada! O WhatsApp foi aberto com os dados preenchidos. Confira a mensagem e toque em enviar.';
      copyButton.hidden = false;
    });
  }
  if (copyButton) copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      copyButton.textContent = 'Mensagem copiada ✓';
      feedback.textContent = 'Mensagem copiada. Agora você pode colar no WhatsApp ou no canal de contato da empresa.';
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = preparedMessage;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      const copied = document.execCommand('copy');
      textArea.remove();
      feedback.textContent = copied ? 'Mensagem copiada. Agora você pode colar no canal de contato da empresa.' : 'Não foi possível copiar automaticamente. Selecione e copie os dados novamente.';
      if (copied) copyButton.textContent = 'Mensagem copiada ✓';
    }
  });
})();
