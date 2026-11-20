// Usage: node render-specs.js <specs.json> <outdir> [id ...]
// Renders each spec in gen.html to <outdir>/<id>.mp4 (30 fps, H.264) and <outdir>/<id>.jpg (final frame).
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
(async () => {
  const [specFile, outDir, ...only] = process.argv.slice(2);
  const specs = JSON.parse(fs.readFileSync(specFile, 'utf8')).filter(s => !only.length || only.includes(s.id));
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.join(__dirname, 'gen.html'));
  await p.evaluate(() => document.fonts.ready);
  for (const s of specs) {
    const tmp = fs.mkdtempSync(path.join(outDir, '.f-'));
    await p.evaluate(s => build(s), s);
    await p.evaluate(() => document.fonts.ready);
    const fps = 30, n = Math.round((s.dur || 6) * fps);
    for (let i = 0; i < n; i++) {
      await p.evaluate(t => setT(t), i / fps);
      await p.screenshot({ path: path.join(tmp, `f${String(i).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 92 });
    }
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', path.join(tmp, 'f%04d.jpg'),
      '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', path.join(outDir, `${s.id}.mp4`)]);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', path.join(tmp, `f${String(n - 1).padStart(4, '0')}.jpg`),
      '-q:v', '3', path.join(outDir, `${s.id}.jpg`)]);
    fs.rmSync(tmp, { recursive: true, force: true });
    console.log('ok', s.id, (s.dur || 6) + 's');
  }
  await b.close();
})();
