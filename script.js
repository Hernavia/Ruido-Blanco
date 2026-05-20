const SUPABASE_URL = 'https://nyikwlpbkwvqrqrwiida.supabase.co';
const SUPABASE_KEY = 'sb_publishable_g6_K9nQfNFadXcx_LwYDMQ_BB5v1_Yr';

async function sendMessage(inputId, sentId, articulo) {
  const textarea = document.getElementById(inputId);
  const text = textarea.value.trim();
  if (!text) return;

  await fetch(`${SUPABASE_URL}/rest/v1/mensajes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    },
    body: JSON.stringify({
      articulo: articulo,
      texto: text,
      fecha: new Date().toISOString()
    })
  });

  textarea.value = '';
  const sent = document.getElementById(sentId);
  sent.style.display = 'block';
  setTimeout(() => sent.style.display = 'none', 2500);
}
