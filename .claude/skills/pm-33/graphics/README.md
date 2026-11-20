# ProfitMoments graphics kit

Templates for the channel's on-screen graphics, following `.claude/youtube/canal/6-guia-estilo.md`.

- `templates.html` — one 1920×1080 frame per element: `hook`, `number`, `chart`, `quote`, `chapter`,
  and a 1280×720 `thumb` draft. Edit the text and data for each video; keep the style.
- `render.js` — renders every frame to `out-<id>.png`.
- `animate-chart.js` — renders the chart drawing itself left to right (5 s, 30 fps) to PNG frames;
  then `ffmpeg -framerate 30 -i anim/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 20 out.mp4`.

**Per-video production (preferred):** write a `specs.json` in the project's `graphics/` folder (one
object per graphic: `kinetic`, `number`, `quote`, `chapter`, `rows`, `compare`, `chart` — see
`.claude/youtube/producao/PM-M11-20261119-R01/graphics/specs.json` for examples) and run

    node render-specs.js <project>/graphics/specs.json <project>/graphics [id ...]

It renders each spec from `gen.html` into `<id>.mp4` (animated, slow push-in, counters, highlights,
chart drawing) and `<id>.jpg` (final frame). About 1 minute per graphic; run batches in parallel.

Setup (run inside this folder; Playwright and ffmpeg are preinstalled in the session):

    npm install
    mkdir -p anim
    node render.js

Rules: only verified numbers; source and date on every data frame; months without data drawn dashed;
our calculations labelled; every graphic delivered animated (MP4) when it goes into the video.
