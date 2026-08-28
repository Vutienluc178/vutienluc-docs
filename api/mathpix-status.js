// Polls Mathpix for the status of a submitted PDF job. Credentials are
// passed through from the browser on every request and never stored here.
export default async function handler(req, res) {
  const { pdf_id, app_id, app_key } = req.query || {};
  if (!pdf_id || !app_id || !app_key) {
    res.status(400).json({ error: 'missing_fields' });
    return;
  }

  try {
    const mpRes = await fetch(
      `https://api.mathpix.com/v3/pdf/${encodeURIComponent(pdf_id)}`,
      { headers: { app_id, app_key } },
    );
    const data = await mpRes.json();
    res.status(mpRes.status).json(data);
  } catch (err) {
    res.status(500).json({ error: 'server_error', message: String(err?.message || err) });
  }
}
