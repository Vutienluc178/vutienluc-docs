// Fetches the finished conversion (Mathpix Markdown, with math as
// $...$ / $$...$$) for a completed PDF job. Credentials pass through only.
export default async function handler(req, res) {
  const { pdf_id, app_id, app_key, ext } = req.query || {};
  if (!pdf_id || !app_id || !app_key) {
    res.status(400).json({ error: 'missing_fields' });
    return;
  }

  try {
    const mpRes = await fetch(
      `https://api.mathpix.com/v3/pdf/${encodeURIComponent(pdf_id)}.${ext || 'md'}`,
      { headers: { app_id, app_key } },
    );
    const text = await mpRes.text();
    res.status(mpRes.status).setHeader('Content-Type', 'text/plain; charset=utf-8').send(text);
  } catch (err) {
    res
      .status(500)
      .setHeader('Content-Type', 'application/json')
      .send(JSON.stringify({ error: 'server_error', message: String(err?.message || err) }));
  }
}
