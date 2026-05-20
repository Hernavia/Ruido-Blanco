async function sendMessage(inputId, sentId, articulo) {
  const textarea = document.getElementById(inputId);
  const text = textarea.value.trim();
  if (!text) return;

  await fetch('https://formspree.io/f/xldpgjop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ articulo: articulo, mensaje: text })
  });

  textarea.value = '';
  const sent = document.getElementById(sentId);
  sent.style.display = 'block';
  setTimeout(() => sent.style.display = 'none', 2500);
}
