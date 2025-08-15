// Vercel Serverless Function (Node 18+)
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const {
      filename,      // ex: "img-1693423423.webp"
      path,          // ex: "carrossel" ou "apresentacoes/2025"
      contentBase64, // base64 do arquivo (sem prefixo data:)
      message        // mensagem do commit
    } = req.body || {};

    if (!filename || !path || !contentBase64) {
      res.status(400).json({ error: 'filename, path e contentBase64 são obrigatórios.' });
      return;
    }

    const owner  = process.env.GITHUB_OWNER;     // ex: "seu-usuario"
    const repo   = process.env.GITHUB_REPO;      // ex: "maracatu-imagens"
    const branch = process.env.GITHUB_BRANCH || 'main';
    const token  = process.env.GITHUB_TOKEN;     // token com escopo "repo"

    if (!owner || !repo || !token) {
      res.status(500).json({ error: 'Variáveis de ambiente GITHUB_OWNER, GITHUB_REPO e GITHUB_TOKEN são obrigatórias.' });
      return;
    }

    // Monta a URL da API de contents
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}/${encodeURIComponent(filename)}`;

    // Cria o arquivo via PUT (GitHub Contents API)
    const ghResp = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message || `Upload via painel - ${new Date().toISOString()}`,
        content: contentBase64,
        branch
      })
    });

    if (!ghResp.ok) {
      const err = await ghResp.json().catch(() => ({}));
      res.status(ghResp.status).json({ error: 'Falha ao enviar para GitHub', details: err });
      return;
    }

    // Monta a URL RAW
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}/${filename}`;
    res.status(200).json({ ok: true, rawUrl });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erro interno', details: String(e) });
  }
};
