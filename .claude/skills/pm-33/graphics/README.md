# ProfitMoments graphics kit

Templates for the channel's on-screen graphics, following `.claude/youtube/canal/6-guia-estilo.md`.

- `templates.html` — one 1920×1080 frame per element: `hook`, `number`, `chart`, `quote`, `chapter`,
  and a 1280×720 `thumb` draft. Edit the text and data for each video; keep the style.
- `render.js` — renders every frame to `out-<id>.png`.
- `animate-chart.js` — renders the chart drawing itself left to right (5 s, 30 fps) to PNG frames;
  then `ffmpeg -framerate 30 -i anim/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 20 out.mp4`.

Setup (run inside this folder; Playwright and ffmpeg are preinstalled in the session):

    npm install
    mkdir -p anim
    node render.js

Rules: only verified numbers; source and date on every data frame; months without data drawn dashed;
our calculations labelled; every graphic delivered animated (MP4) when it goes into the video.
