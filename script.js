function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document
      .querySelectorAll('.modal-overlay.active')
      .forEach(m => closeModal(m.id));
  }
});

function sendMessage(inputId, sentId, listId) {

  const textarea = document.getElementById(inputId);
  const text = textarea.value.trim();

  if (!text) return;

  if (listId) {

    const list = document.getElementById(listId);

    const item = document.createElement('div');

    item.className = 'message-item';

    const now = new Date();

    const time = now.toLocaleTimeString('es-CO', {
      hour: '2-digit',
      minute: '2-digit'
    });

    item.innerHTML = `
      <div class="msg-time">${time}</div>
      <div>${text}</div>
    `;

    list.appendChild(item);

    list.scrollTop = list.scrollHeight;
  }

  textarea.value = '';

  const sentEl = document.getElementById(sentId);

  sentEl.style.display = 'block';

  setTimeout(() => {
    sentEl.style.display = 'none';
  }, 2500);
}
