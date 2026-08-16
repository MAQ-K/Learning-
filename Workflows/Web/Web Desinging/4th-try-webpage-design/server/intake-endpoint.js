/**
 * Intake form receiver — Express endpoint
 *
 * Receives the JSON POSTed by forms/client-intake-form.html and saves it to
 * clients/<client-slug>/incoming-form.json, where the /new-submission
 * Claude Code command picks it up.
 *
 * Usage: mount this router in your existing Express app, e.g.
 *   const intakeRouter = require('./server/intake-endpoint');
 *   app.use('/api', intakeRouter);
 *
 * Requires: npm install express
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
router.use(express.json());

const CLIENTS_DIR = path.join(__dirname, '..', 'clients');

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^\w\u0600-\u06FF\s-]/g, '') // keep Arabic + word chars
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

router.post('/intake', (req, res) => {
  const data = req.body;

  if (!data.company_name_en && !data.company_name_ar) {
    return res.status(400).json({ error: 'Missing company name' });
  }

  const slugSource = data.company_name_en || data.company_name_ar;
  const slug = slugify(slugSource);
  const clientDir = path.join(CLIENTS_DIR, slug);

  try {
    fs.mkdirSync(clientDir, { recursive: true });

    const record = {
      received_at: new Date().toISOString(),
      slug,
      form_data: data
    };

    fs.writeFileSync(
      path.join(clientDir, 'incoming-form.json'),
      JSON.stringify(record, null, 2),
      'utf-8'
    );

    console.log(`New intake received: ${slug}`);

    // OPTIONAL: notify yourself (email/Slack) that a new submission arrived,
    // so you know to run `/new-submission` in Claude Code. Left as a
    // placeholder — plug in your existing notification method here.
    // e.g. sendEmail('you@yourcompany.com', `New intake: ${slug}`);

    res.json({ ok: true, slug });
  } catch (err) {
    console.error('Failed to save intake:', err);
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

module.exports = router;
