// Proxies a PDF to the Mathpix v3/pdf endpoint using credentials the visitor
// supplies themselves (never stored on the server). Kept as a thin relay so
// the Mathpix app_key never has to be embedded in client-side JS, which
// would expose it to every visitor of this public site.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  try {
    const { app_id, app_key, filename, fileBase64 } = req.body || {};
    if (!app_id || !app_key || !fileBase64) {
      res.status(400).json({ error: 'missing_fields' });
      return;
    }

    const buffer = Buffer.from(fileBase64, 'base64');
    const form = new FormData();
    form.append(
      'file',
      new Blob([buffer], { type: 'application/pdf' }),
      filename || 'document.pdf',
    );
    form.append(
      'options_json',
      JSON.stringify({ conversion_formats: { md: true } }),
    );

    const mpRes = await fetch('https://api.mathpix.com/v3/pdf', {
      method: 'POST',
      headers: { app_id, app_key },
      body: form,
    });
    const data = await mpRes.json();
    res.status(mpRes.status).json(data);
  } catch (err) {
    res.status(500).json({ error: 'server_error', message: String(err?.message || err) });
  }
}
